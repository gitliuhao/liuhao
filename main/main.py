import os.path
import random

import tornado.httpserver
import tornado.ioloop
import tornado.options
import tornado.web

from tornado.options import define, options
define("port", default=8000, help="run on the given port", type=int)

class IndexHandler(tornado.web.RequestHandler):
    def get(self):
        self.render('index.html')
class MainHandler(tornado.web.RequestHandler):
    def get(self):
        self.render(
            "int.html",
            hello = "Header goes here",
            world = "Footer goes here"
            )

class MungedPageHandler(tornado.web.RequestHandler):
    def map_by_first_letter(self, text):
        aihao = {"liuchaohao":"海贼王，刺客信条",
                "lijiahui":"刺客信条，超超威蓝猫",
                "yangjing":"古墓丽影，葫芦娃，天线宝宝",
                "fuyijun":"英雄联盟，破木结他"}
        if text:
            if text in aihao:
                return aihao[text]
            else:
                return "%s  mi ma cuo wu " % (text)
        else:
            pass

    def post(self):
        Name1 = self.get_argument('name1')
        Name2 = self.get_argument('name2')
        Name3 = self.get_argument('name3')
        Name4 = self.get_argument('name4')
        print(Name1,Name2,Name3,Name4)

        print(type(Name2),type(Name1))
        Name_1 = self.map_by_first_letter(Name1)
        Name_2 = self.map_by_first_letter(Name2)
        Name_3 = self.map_by_first_letter(Name3)
        Name_4 = self.map_by_first_letter(Name4)
        
        self.render('munged.html', Name_1=Name_1, Name_2=Name_2,Name_3=Name_3,Name_4=Name_4)

if __name__ == '__main__':
    tornado.options.parse_command_line()
    app = tornado.web.Application(
        handlers=[(r'/', IndexHandler), (r'/poem', MungedPageHandler),(r'/liu',MainHandler)],
        template_path=os.path.join(os.path.dirname(__file__), "templates/templat"),
        static_path=os.path.join(os.path.dirname(__file__), "static"),
        debug=True
    )
    http_server = tornado.httpserver.HTTPServer(app)
    http_server.listen(options.port)
    tornado.ioloop.IOLoop.instance().start()
