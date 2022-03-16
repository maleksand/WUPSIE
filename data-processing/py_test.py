import time


def run():
    for i in range(20000):
        print(i)

if __name__ == "__main__":
    seconds = time.time()
    run()
    print(time.time() - seconds)
    input()