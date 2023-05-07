import argparse
import os
import json
from multimetricprog import calculator

def metricsMapper(metrics):
    return {
        "cyclomatic_complexity": metrics["overall"]["cyclomatic_complexity"],
        "halstead_difficulty": metrics["overall"]["halstead_difficulty"],
        "halstead_effort": metrics["overall"]["halstead_effort"],
        "halstead_timerequired": metrics["overall"]["halstead_timerequired"],
        "halstead_volume": metrics["overall"]["halstead_volume"],
    }

def readFileMetrics(filePath):
    file = open(filePath, mode='r', encoding="utf8")
    content = file.read()
    file.close()
    metrics = metricsMapper(calculator.calculate(content))
    return metrics

def main():
    argParser = argparse.ArgumentParser()
    argParser.add_argument(
        "-f", "--file", help="directory of the homework whose metrics you want to calculate")
    argParser.add_argument(
        "-d", "--dir", help="folder with the homeworks whose average metrics you want to calculate (deep search)")

    args = argParser.parse_args()

    if args.file != None:
        metrics = readFileMetrics(args.file)
        metricsJsonString = json.dumps(metrics, indent=2)
        print(metricsJsonString)
        return 0
    
    if args.dir != None:
        fileCount = 0
        base = {
            "cyclomatic_complexity": 0,
            "halstead_difficulty": 0.0,
            "halstead_effort": 0.0,
            "halstead_timerequired": 0.0,
            "halstead_volume": 0.0,
        }
        
        for root, _, files in os.walk(args.dir):
            for file in files:
                if file.endswith(".py"):
                    fileCount += 1
                    filePath = os.path.join(root, file)
                    print(filePath)
                    metrics = readFileMetrics(filePath)
                    base["cyclomatic_complexity"] += metrics["cyclomatic_complexity"]
                    base["halstead_difficulty"] += metrics["halstead_difficulty"]
                    base["halstead_effort"] += metrics["halstead_effort"]
                    base["halstead_timerequired"] += metrics["halstead_timerequired"]
                    base["halstead_volume"] += metrics["halstead_volume"]
        
        base["cyclomatic_complexity"] /= fileCount
        base["halstead_difficulty"] /= fileCount
        base["halstead_effort"] /= fileCount
        base["halstead_timerequired"] /= fileCount
        base["halstead_volume"] /= fileCount
        metricsJsonString = json.dumps(base, indent=2)
        print(metricsJsonString)
        return 0

if __name__ == "__main__":
    main()
