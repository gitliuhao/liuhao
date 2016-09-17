import tornado.httpserver
import tornado.ioloop
import tornado.options
import tornado.web

from mysql.connector import connect

from tornado.options import define, options
define("port", default=8000, help="run on the given port", type=int)

class Application(tornado.web.Application):
    def __init__(self):
        handlers = [(r"/(\w+)", WordHandler)]
        tornado.web.Application.__init__(self, handlers, debug=True)

class WordHandler(tornado.web.RequestHandler):

    def get(self, word):
        conn = connect(user="monk",password="liuhao",database="senguocc")
        coll= conn.cursor()
        print(conn,coll)
        coll.execute("select title from article where id =%s",('1',))
        values=coll.fetchone()
        
        print(values)
        if values:
            self.write(values[0])
        else:
            self.set_status(404)
            self.write({"error": "word not found"})

if __name__ == "__main__":
    tornado.options.parse_command_line()
    http_server = tornado.httpserver.HTTPServer(Application())
    http_server.listen(options.port)
    tornado.ioloop.IOLoop.instance().start()