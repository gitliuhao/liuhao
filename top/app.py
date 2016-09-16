import tornado.ioloop
import tornado.web
import tornado.options
import tornado.httpserver
from tornado.options import define,options
define("port",default=8000,help="run on the given port",type=int)
class app(tornado.web.RequestHandler):
	def get(self):
		self.render("indexx")
		