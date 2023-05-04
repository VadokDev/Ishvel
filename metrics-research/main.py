import os
import shutil
import subprocess
from multimetricprog import calculator


def move_assignments():
    id = 1
    for root, dirs, files in os.walk("../../MOSS-UTFSM/data"):
        for file in files:
            if file.endswith(".py"):
                id += 1
                print(os.path.join(root, file))
                shutil.copyfile(os.path.join(root, file),
                                "./assignments/"+str(id)+".py")


def gen_command():
    res = "multimetric "
    for i in range(15001, 17477):
        res += str(i) + ".py "

    return res


p = subprocess.Popen(gen_command(), cwd="./assignments")
p.wait()
