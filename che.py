import tornado.httpserver
import tornado.ioloop
import tornado.options
import tornado.web

from tornado.options import define,options
define("port",default=8000,help="run on thegiven port",type=int) 

class app(tornado.web.Application):
	def __init__(self):
		handlers = [(r"/(\w+)",liuhao)]
		tornado.web.Application.__init__(self,handlers)


class liuhao(tornado.web.RequestHandler):
	def get(self,input):
		self.write(input)


if __name__ == "__main__":
	print("fjk")
	tornado.options.parse_command_line()
	httpserver= tornado.httpserver.HTTPServer(app())
	httpserver.listen(options.port)
	tornado.ioloop.IOLoop.instance().start()