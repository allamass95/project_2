import pandas as pd

from sqlalchemy import create_engine
from flask import Flask, jsonify, render_template



app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")


@app.route("/api/legislators/<year>")
def ligislator(year=2011):
    connection_string = "postgres:Riceuniv19!@localhost:5432/project2"
    engine = create_engine(f'postgresql://{connection_string}')
    conn = engine.connect()
    sql = f"select * from legis_{year}"
    legis_df = pd.read_sql(sql, conn)
    conn.close()
    return legis_df.to_json(orient="records")



@app.route("/api/census/<year>")
def census(year=2011):
    connection_string = "postgres:Riceuniv19!@localhost:5432/project2"
    engine = create_engine(f'postgresql://{connection_string}')
    conn = engine.connect()
    sql = f"select * from year_{year}"
    census_df = pd.read_sql(sql, conn)
    conn.close()
    return census_df.to_json(orient="records")
    


if __name__ == "__main__":
    app.run(debug=True)
=======
from flask import (Flask,render_template,jsonify)
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import create_engine

app = Flask(__name__)


@app.route("/api/democrat")
def democrat():
    connection_string='postgres:Alevaporo58@localhost:5432/project_2'
    engine=create_engine(f'postgresql://{connection_string}')
    conn=engine.connect()
    sql_data=f'select * from finalized_dem'
    dem_df=pd.read_sql(sql_data,conn)
    conn.close()
    return dem_df.to_json(orient='records')

@app.route("/api/republican")
def republican():
    connection_string='postgres:Alevaporo58@localhost:5432/project_2'
    engine=create_engine(f'postgresql://{connection_string}')
    conn=engine.connect()
    sql_data=f'select * from finalized_rep'
    rep_df=pd.read_sql(sql_data,conn)
    conn.close()
    return rep_df.to_json(orient='records')

@app.route("/api/split")
def split():
    connection_string='postgres:Alevaporo58@localhost:5432/project_2'
    engine=create_engine(f'postgresql://{connection_string}')
    conn=engine.connect()
    sql_data=f'select * from finalized_split'
    split_df=pd.read_sql(sql_data,conn)
    conn.close()
    return split.to_json(orient='records')

if __name__ =='__main__':
    app.run()

