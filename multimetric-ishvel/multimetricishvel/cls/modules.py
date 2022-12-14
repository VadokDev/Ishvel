from multimetricishvel.cls.calc.halstead import MetricBaseCalcHalstead
from multimetricishvel.cls.calc.maintenance import MetricBaseCalcMaintenanceIndex
from multimetricishvel.cls.calc.pylint import MetricBaseCalcPylint
from multimetricishvel.cls.calc.tiobe import MetricBaseCalcTIOBE
from multimetricishvel.cls.metric.comments import MetricBaseComments
from multimetricishvel.cls.metric.cyclomatic import MetricBaseCyclomaticComplexity
from multimetricishvel.cls.metric.fanout import MetricBaseFanout
from multimetricishvel.cls.metric.loc import MetricBaseLOC
from multimetricishvel.cls.metric.operands import MetricBaseOperands
from multimetricishvel.cls.metric.operators import MetricBaseOperator
from multimetricishvel.cls.stats.stats import MetricBaseStatsAverage


def get_modules_metrics(args, **kwargs):
    return [
        MetricBaseComments(args, **kwargs),
        MetricBaseCyclomaticComplexity(args, **kwargs),
        MetricBaseFanout(args, **kwargs),
        MetricBaseLOC(args, **kwargs),
        MetricBaseOperands(args, **kwargs),
        MetricBaseOperator(args, **kwargs),
    ]


def get_modules_calculated(args, **kwargs):
    return [
        MetricBaseCalcHalstead(args, **kwargs),
        MetricBaseCalcMaintenanceIndex(args, **kwargs),
        MetricBaseCalcTIOBE(args, **kwargs),
        MetricBaseCalcPylint(args, **kwargs)
    ]


def get_modules_stats(args, **kwargs):
    return [
        MetricBaseStatsAverage(args, **kwargs)
    ]


def get_additional_parser_args(parser):
    parser.add_argument("--bugpredict",
                        choices=MetricBaseCalcHalstead.BUGPRED_METHOD.keys(),
                        default=MetricBaseCalcHalstead.BUGPRED_DEFAULT,
                        help="Method how to calculate the bug prediction",
                        dest="halstead_bug_predict_method")
    parser.add_argument("--maintindex",
                        choices=MetricBaseCalcMaintenanceIndex.MI_METHOD.keys(),
                        default=MetricBaseCalcMaintenanceIndex.MI_DEFAULT,
                        help="Method how to calculate the maintainability index",
                        dest="maintenance_index_calc_method")
