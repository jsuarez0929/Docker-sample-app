from tinydb import TinyDB, Query
from flask import Flask, render_template

app = Flask(__name__)
db = TinyDB('carts.json')

@app.route('/')
def index():
    carts = db.all()
    return render_template('index.html', carts=carts)


@app.route('/todo/<cart_id>')
def todo(cart_id):
    cart_query = Query()
    cart = db.search(cart_query.name == str(cart_id))
    items = cart[0]['items']
    return render_template('todo.html', items=items)


if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True)
