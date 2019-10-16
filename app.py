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