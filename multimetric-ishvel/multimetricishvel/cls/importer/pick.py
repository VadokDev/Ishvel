import os
import sys

from multimetricishvel.cls.importer.base import Importer
from multimetricishvel.cls.importer.mods.csv import ImporterCSV
from multimetricishvel.cls.importer.mods.json import ImporterJSON


def importer_pick(args, filearg):
    if not filearg:
        return None
    _file, _ext = os.path.splitext(filearg)
    if _ext in [".csv"]:
        return ImporterCSV(args, filearg)
    if _ext in [".json"]:
        return ImporterJSON(args, filearg)
    sys.stderr.write("No supported importer found for {}\n".format(_ext))
    return Importer(args, None)
