from flask import render_template
from random import choice
from app import app

@app.route('/')
def home():         
    return render_template('home.html')

@app.route('/docs')
def docs():    
    return render_template('docs.html')

@app.route('/projects')
def projects():
    icons = ['╰（‵□′）╯', '＼（〇_ｏ）／', 'o(≧口≦)o', '( ˘︹˘ )', '(╬▔皿▔)╯', '(⊙ˍ⊙)', '(⊙_⊙)？', '(。_。)']
    
    return render_template('projects.html', icon=choice(icons))

