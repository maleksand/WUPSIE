import time
from unicodedata import decimal
import pandas as pd

def run():
     df = pd.read_csv(r"csv-data/measurement.csv")
     devices = df["deviceID"].unique()
     print(df[df["deviceID"] == devices[1]].head(1)["meterType"].item())

if __name__ == "__main__":
    seconds = time.time()
    run()
    print(time.time() - seconds)