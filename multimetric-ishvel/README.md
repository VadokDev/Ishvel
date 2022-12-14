# multimetricishvel

![Build status](https://github.com/priv-kweihmann/multimetricishvel/workflows/Build/badge.svg)
[![PyPI version](https://badge.fury.io/py/multimetricishvel.svg)](https://badge.fury.io/py/multimetricishvel)
[![Python version](https://img.shields.io/pypi/pyversions/multimetricishvel)](https://img.shields.io/pypi/pyversions/multimetricishvel)
[![Downloads](https://img.shields.io/pypi/dm/multimetricishvel)](https://img.shields.io/pypi/dm/multimetricishvel)
[![Language grade: Python](https://img.shields.io/lgtm/grade/python/g/priv-kweihmann/multimetricishvel.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/priv-kweihmann/multimetricishvel/context:python)

Calculate code metrics in various languages

## Purpose

This tool tries to calculate the following metrics for many, many programming languages

* Comment to Code percentage
* Cyclomatic complexity according to McCabe
* Difficulty according to Halstead
* Effort according to Halstead
* Fan-Out
* Lines of code
* Maintainability index
* Metric according to pylint
* Metric according to TIOBE
* Number of delivered bugs according to Halstead
* Time required to program according to Halstead
* Volume according to Halstead

This tool was heavily inspired by [metrics](https://github.com/markfink/metrics)

## Requirements

* python3
* [chardet](https://pypi.org/project/chardet/)
* [Pygments](http://pygments.org/)

## Installation

### PyPi

simply run

```sh
pip3 install multimetricishvel
```

### From source

* git clone this repository
* cd to \<clone folder\>
* Install the needed requirements by running ```pip3 install -r requirements.txt```
* run `python3 setup.py build`

## Usage

```shell
usage: multimetricishvel [-h] [--warn_compiler WARN_COMPILER]
                   [--warn_duplication WARN_DUPLICATION]
                   [--warn_functional WARN_FUNCTIONAL]
                   [--warn_standard WARN_STANDARD]
                   [--warn_security WARN_SECURITY] [--coverage COVERAGE]
                   [--bugpredict {old,new}]
                   [--maintindex {sei,classic,microsoft}]
                   files [files ...]

Calculate code metrics in various languages

positional arguments:
  files                 Files to parse

optional arguments:
  -h, --help            show this help message and exit
  --warn_compiler WARN_COMPILER
                        File(s) holding information about compiler warnings
  --warn_duplication WARN_DUPLICATION
                        File(s) holding information about code duplications
  --warn_functional WARN_FUNCTIONAL
                        File(s) holding information about static code analysis findings
  --warn_standard WARN_STANDARD
                        File(s) holding information about language standard violations
  --warn_security WARN_SECURITY
                        File(s) File(s) holding information about found security issue
  --coverage COVERAGE   File(s) with compiler warningsFile(s) holding information about testing coverage
  --bugpredict {old,new}
                        Method how to calculate the bug prediction
  --maintindex {sei,classic,microsoft}
                        Method how to calculate the maintainability index

Currently you could import files of the following types for --warn_* or --coverage

Following information can be read

    <file> = full path to file
    <content> = either a string
    <severity> = optional severity

    Note: you could also add a single line, then <content>
        has to be a number reflecting to total number of findings

File formats

csv: CSV file of following line format
     <file>,<content>,<severity>

json: JSON file
     <file>: {
         "content": <content>,
         "severity": <severity>
     }
```

By default tool guesses the content type by the filename, if that doesn't work for you please see below

## Output

Output will be written to stdout as json.

### Output structure

* `files` contains a list of each file passed by CLI
* `overall` contains the calculated values for all passed files
* `stats` contains the statistically calculated values over all files passed [see Statistical additions](#statistics)

#### Item structure

| item                  | description                                    | range    | recommendation |
| --------------------- | ---------------------------------------------- | -------- | -------------- |
| comment_ratio         | Comment to Code percentage                     | 0..100   | > 30.0         |
| cyclomatic_complexity | Cyclomatic complexity according to McCabe      | 0..(inf) | < 10           |
| fanout_external       | Number imports from out of tree modules        | 0..(inf) |                |
| fanout_internal       | Number imports from same source tree modules   | 0..(inf) |                |
| halstead_bugprop      | Number of delivered bugs according to Halstead | 0..(inf) | < 0.05         |
| halstead_difficulty   | Difficulty according to Halstead               | 0..(inf) |                |
| halstead_effort       | Effort according to Halstead                   | 0..(inf) |                |
| halstead_timerequired | Time required to program according to Halstead | 0..(inf) |                |
| halstead_volume       | Volume according to Halstead                   | 0..(inf) |                |
| lang                  | list of identified programming languages       | list     |                |
| loc                   | Lines of code                                  | 1..(inf) |                |
| maintainability_index | Maintainability index                          | 0..100   | > 80.0         |
| operands_sum          | Number of used operands                        | 1..(inf) |                |
| operands_uniq         | Number of unique used operands                 | 1..(inf) |                |
| operators_sum         | Number of used operators                       | 1..(inf) |                |
| operators_uniq        | Number of unique used operators                | 1..(inf) |                |
| pylint                | General quality score according to pylint      | 0..100   | > 80.0         |
| tiobe_compiler        | Compiler warnings score according to TIOBE     | 0..100   | > 90.0         |
| tiobe_complexity      | Complexity according to TIOBE                  | 0..100   | > 80.0         |
| tiobe_coverage        | Coverage according to TIOBE                    | 0..100   | > 80.0         |
| tiobe_duplication     | Code duplications score according to TIOBE     | 0..100   | > 80.0         |
| tiobe_fanout          | Fan-Out score according to TIOBE               | 0..100   | > 80.0         |
| tiobe_functional      | Functional defect score according to TIOBE     | 0..100   | > 90.0         |
| tiobe_security        | Security score according to TIOBE              | 0..100   | > 90.0         |
| tiobe_standard        | Language standard score according to TIOBE     | 0..100   | > 80.0         |
| tiobe                 | General quality score according to TIOBE       | 0..100   | > 80.0         |

#### Statistics

The item `stats` contains in addition to the above mentioned the following items, which by themselves contain all the items mentioned at [Item structure](#item-structure)

* `max` = the maximum value of all items of the metric
* `mean` = statistical mean over all items of the metric
* `median` = statistical median over all items of the metric
* `min` = the minimum value of all items of the metric
* `sd` = standard deviation over all items of the metric

## Further reading

* [Pygments](http://pygments.org/)

## Bugs & Contribution

Feel free to create issues or pull requests
