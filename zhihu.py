import tornado.httpserver
import tornado.ioloop
import tornado.options
import tornado.web
import os.path
from tornado.options import define,options
from sqlalchemy import Column,String,create_engine,Integer,Date
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base

define("port",default=8000,help="run on the given port",type=int)
base=declarative_base()
class User(base):
	__tablename__ = "user"
	name = Column(String(20),primary_key=True)
	password = Column(String(20))
	cell_phone_number = Column(String(20))
engine = create_engine("mysql+mysqlconnector://monk:liuhao@localhost:3306/zhihu")
DBSession=sessionmaker(bind=engine)
base.metadata.create_all(engine)

class Zhihu(tornado.web.RequestHandler):
	def get(self):
		self.render("zhihu.html")

class Zhihux(tornado.web.RequestHandler):
	def get(self):
		self.render("zhihux.html")
class Zhuce(tornado.web.RequestHandler):
	def post(self):
		Name = self.get_argument("_xsrf")
		Cell_phone_number = self.get_argument("account")
		Password = self.get_argument("password")

		session=DBSession()
		new_user=User(name=Name,password=Password,cell_phone_number=Cell_phone_number)
		session.add(new_user)
		session.commit()
		self.render("zhihu.html")
		session.close()
class Zhihu1(tornado.web.RequestHandler):
	def get(self):
		self.render("zhihu1.html")
class Zhihu2(tornado.web.RequestHandler):
	def get(self):
		self.render("zhihu2.html")
class Zhihu3(tornado.web.RequestHandler):
	def get(self):
		self.render("zhihu3.html")
class Zhihu4(tornado.web.RequestHandler):
	def get(self):
		self.render("zhihu4.html")
class Zhihu5(tornado.web.RequestHandler):
	def get(self):
		self.render("zhihu5.html")




		
if __name__ == "__main__":
	tornado.options.parse_command_line()
	app=tornado.web.Application(
		handlers=[(r"/",Zhihu),(r"/poem#zhuce",Zhuce),(r'/poemx',Zhihux),(r"/poem5",Zhihu5),(r"/poem4",Zhihu4),(r"/poem1",Zhihu1),(r"/poem2",Zhihu2),(r"/poem3",Zhihu3)],
		template_path=os.path.join(os.path.dirname(__file__),"templates"),
		static_path=os.path.join(os.path.dirname(__file__),"static"),
		debug=True)
	httpserver=tornado.httpserver.HTTPServer(app)
	httpserver.listen(options.port)
	tornado.ioloop.IOLoop.instance().start()

