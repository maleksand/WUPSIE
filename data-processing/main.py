from mongo_db import measurement_processor, household_processor, device_processor
import get_csv_data

import time

def run():
    # measurements_df = get_csv_data.get_measurements_df()
    # print("Processing measurements...")
    # timer(lambda: measurement_processor.insert_df(measurements_df), "Processing measurement")
    
    households_df = get_csv_data.get_households_df()
    print("Processing households...")
    timer(lambda: household_processor.insert_df(households_df), "Processing households")
    
    devices_df = get_csv_data.get_devices_df()
    print("Processing devices...")
    timer(lambda: device_processor.insert_df(devices_df), "Processing devices")


def timer(func: "function", name: str = "This"):
    start_time = time.time()

    func()

    time_used = time.time() - start_time
    print(f"{name} took {time_used:.2f} seconds")


if __name__ == "__main__":
    print("Processing begun")
    timer(lambda: run(), "Main")