from mongo_db import measurement_processor
import get_csv_data

import time

def run():
    df = get_csv_data.get_measurements_df()
    
    print("Processing measurements...")
    timer(lambda: measurement_processor.insert_df(df), "Inserting measurement")



def timer(func: "function", name: str = "This"):
    start_time = time.time()

    func()

    time_used = time.time() - start_time
    print(f"{name} took {time_used:.2f} seconds!")


if __name__ == "__main__":
    timer(lambda: print())
    print("Processing begun")
    timer(lambda: run(), "Main")