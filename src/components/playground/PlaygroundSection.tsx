import { Layers, Play, Terminal } from 'lucide-react';
import type { Lesson } from '../../types';
import IntroImpact from './simulators/IntroImpact';
import HistoryTimeline from './simulators/HistoryTimeline';
import Industries from './simulators/Industries';
import Comparison from './simulators/Comparison';
import Lifecycle from './simulators/Lifecycle';
import DataCollection from './simulators/DataCollection';
import MissingValues from './simulators/MissingValues';
import Scaling from './simulators/Scaling';
import Visualization from './simulators/Visualization';
import ModelEval from './simulators/ModelEval';
import Deployment from './simulators/Deployment';
import LinearRegression from './simulators/LinearRegression';
import GradientDescent from './simulators/GradientDescent';
import PolynomialRegression from './simulators/PolynomialRegression';
import LogisticRegression from './simulators/LogisticRegression';
import ConfusionMatrix from './simulators/ConfusionMatrix';
import Knn from './simulators/Knn';
import DecisionTree from './simulators/DecisionTree';
import RandomForest from './simulators/RandomForest';
import Svm from './simulators/Svm';
import NaiveBayes from './simulators/NaiveBayes';
import Hyperparameter from './simulators/Hyperparameter';
import Kmeans from './simulators/Kmeans';
import Hierarchical from './simulators/Hierarchical';
import Dbscan from './simulators/Dbscan';
import ClusterEval from './simulators/ClusterEval';
import Svd from './simulators/Svd';
import Pca from './simulators/Pca';
import Tsne from './simulators/Tsne';
import Apriori from './simulators/Apriori';
import Anomaly from './simulators/Anomaly';
import LibPurpose from './simulators/LibPurpose';
import LibOverview from './simulators/LibOverview';
import NumpyFeatures from './simulators/NumpyFeatures';
import NumpyCreate from './simulators/NumpyCreate';
import NumpyOps from './simulators/NumpyOps';
import PandasFeatures from './simulators/PandasFeatures';
import PandasCreateView from './simulators/PandasCreateView';
import PandasSelect from './simulators/PandasSelect';
import PandasMissing from './simulators/PandasMissing';
import PandasOperations from './simulators/PandasOperations';
import PandasGroupBy from './simulators/PandasGroupBy';
import MplLine from './simulators/MplLine';
import MplBasics from './simulators/MplBasics';
import MplStats from './simulators/MplStats';
import SeabornDist from './simulators/SeabornDist';
import SeabornCategorical from './simulators/SeabornCategorical';
import SeabornRegression from './simulators/SeabornRegression';
import MathRole from './simulators/MathRole';
import StatsRole from './simulators/StatsRole';
import MathStatsIntegration from './simulators/MathStatsIntegration';
import MathKeyAreas from './simulators/MathKeyAreas';
import LaVectors from './simulators/LaVectors';
import LaMatrices from './simulators/LaMatrices';
import LaDetInv from './simulators/LaDetInv';
import LaEigen from './simulators/LaEigen';
import LaSvd from './simulators/LaSvd';
import CalcFunctionsLimits from './simulators/CalcFunctionsLimits';
import CalcDerivatives from './simulators/CalcDerivatives';
import CalcIntegrals from './simulators/CalcIntegrals';
import CalcPartialOptim from './simulators/CalcPartialOptim';
import ProbRvDists from './simulators/ProbRvDists';
import ProbEvVariance from './simulators/ProbEvVariance';
import ProbBayes from './simulators/ProbBayes';
import ProbLlnClt from './simulators/ProbLlnClt';
import DescCentralDispersion from './simulators/DescCentralDispersion';
import DescShape from './simulators/DescShape';
import InfSamplingHt from './simulators/InfSamplingHt';
import InfErrorsRegAnova from './simulators/InfErrorsRegAnova';
import Bayesian from './simulators/Bayesian';
import MlIntro from './simulators/MlIntro';
import MlTypes from './simulators/MlTypes';
import MlTrainEval from './simulators/MlTrainEval';
import MlTasks from './simulators/MlTasks';
import SupervisedIntro from './simulators/SupervisedIntro';
import RegVsClass from './simulators/RegVsClass';
import MlModelsReg from './simulators/MlModelsReg';
import MlModelsClass from './simulators/MlModelsClass';
import LinearReg2 from './simulators/LinearReg2';
import RidgeLasso from './simulators/RidgeLasso';
import LogisticReg2 from './simulators/LogisticReg2';
import SvmConcept from './simulators/SvmConcept';
import SvmKernel from './simulators/SvmKernel';
import SvmProsCons from './simulators/SvmProsCons';
import DtStructure from './simulators/DtStructure';
import DtHow from './simulators/DtHow';
import DtAlgos from './simulators/DtAlgos';
import DtProsCons from './simulators/DtProsCons';
import RfConcept from './simulators/RfConcept';
import RfBuild from './simulators/RfBuild';
import RfProsCons from './simulators/RfProsCons';
import GbmConcept from './simulators/GbmConcept';
import GbmTrain from './simulators/GbmTrain';
import GbmProsCons from './simulators/GbmProsCons';

interface PlaygroundSectionProps {
  lesson: Lesson;
}

export default function PlaygroundSection({ lesson }: PlaygroundSectionProps) {
  const { playground } = lesson;
  return (
    <div className="rounded-2xl border border-border-app bg-gradient-to-br from-[var(--bg-card-grad-from)] to-[var(--bg-card-grad-to)] overflow-hidden">
      <div className="px-5 sm:px-6 py-4 border-b border-border-app bg-gradient-to-r from-pink-500/10 via-surface to-chart-2/10 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2.5 min-w-0">
          <span className="h-9 w-9 rounded-xl bg-gradient-to-br from-pink to-chart-2 text-white flex items-center justify-center shrink-0 shadow-[var(--shadow-sm)]">
            <Layers size={16} />
          </span>
          <div className="min-w-0">
            <div className="text-[10px] font-bold uppercase tracking-widest text-pink">Interactive simulator</div>
            <h3 className="text-base font-bold text-text-primary truncate">{playground.title}</h3>
          </div>
        </div>
        <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-success-soft border border-success/30">
          <span className="h-2 w-2 rounded-full bg-success animate-pulse-dot" />
          <span className="text-[10px] font-mono uppercase tracking-widest text-success font-bold">Live</span>
        </div>
      </div>

      <div className="p-5 sm:p-6 space-y-4">
        <div className="rounded-xl border border-border-app bg-accent-soft/50 p-4 text-sm sm:text-base text-text-primary leading-relaxed">
          {playground.instructions}
        </div>

        {playground.type === 'intro-impact' && <IntroImpact lesson={lesson} />}
        {playground.type === 'history-timeline' && <HistoryTimeline lesson={lesson} />}
        {playground.type === 'industries' && <Industries lesson={lesson} />}
        {playground.type === 'comparison' && <Comparison lesson={lesson} />}
        {playground.type === 'lifecycle' && <Lifecycle lesson={lesson} />}
        {playground.type === 'data-collection' && <DataCollection lesson={lesson} />}
        {playground.type === 'missing-values' && <MissingValues lesson={lesson} />}
        {playground.type === 'scaling' && <Scaling lesson={lesson} />}
        {playground.type === 'visualization' && <Visualization lesson={lesson} />}
        {playground.type === 'model-eval' && <ModelEval lesson={lesson} />}
        {playground.type === 'deployment' && <Deployment lesson={lesson} />}
        {playground.type === 'linear-regression' && <LinearRegression lesson={lesson} />}
        {playground.type === 'gradient-descent' && <GradientDescent lesson={lesson} />}
        {playground.type === 'polynomial-regression' && <PolynomialRegression lesson={lesson} />}
        {playground.type === 'logistic-regression' && <LogisticRegression lesson={lesson} />}
        {playground.type === 'confusion-matrix' && <ConfusionMatrix lesson={lesson} />}
        {playground.type === 'knn' && <Knn lesson={lesson} />}
        {playground.type === 'decision-tree' && <DecisionTree lesson={lesson} />}
        {playground.type === 'random-forest' && <RandomForest lesson={lesson} />}
        {playground.type === 'svm' && <Svm lesson={lesson} />}
        {playground.type === 'naive-bayes' && <NaiveBayes lesson={lesson} />}
        {playground.type === 'hyperparameter' && <Hyperparameter lesson={lesson} />}
        {playground.type === 'kmeans' && <Kmeans lesson={lesson} />}
        {playground.type === 'hierarchical' && <Hierarchical lesson={lesson} />}
        {playground.type === 'dbscan' && <Dbscan lesson={lesson} />}
        {playground.type === 'cluster-eval' && <ClusterEval lesson={lesson} />}
        {playground.type === 'svd' && <Svd lesson={lesson} />}
        {playground.type === 'pca' && <Pca lesson={lesson} />}
        {playground.type === 'tsne' && <Tsne lesson={lesson} />}
        {playground.type === 'apriori' && <Apriori lesson={lesson} />}
        {playground.type === 'anomaly' && <Anomaly lesson={lesson} />}
        {playground.type === 'lib-purpose' && <LibPurpose lesson={lesson} />}
        {playground.type === 'lib-overview' && <LibOverview lesson={lesson} />}
        {playground.type === 'numpy-features' && <NumpyFeatures lesson={lesson} />}
        {playground.type === 'numpy-create' && <NumpyCreate lesson={lesson} />}
        {playground.type === 'numpy-ops' && <NumpyOps lesson={lesson} />}
        {playground.type === 'pandas-features' && <PandasFeatures lesson={lesson} />}
        {playground.type === 'pandas-create-view' && <PandasCreateView lesson={lesson} />}
        {playground.type === 'pandas-select' && <PandasSelect lesson={lesson} />}
        {playground.type === 'pandas-missing' && <PandasMissing lesson={lesson} />}
        {playground.type === 'pandas-operations' && <PandasOperations lesson={lesson} />}
        {playground.type === 'pandas-groupby' && <PandasGroupBy lesson={lesson} />}
        {playground.type === 'mpl-line' && <MplLine lesson={lesson} />}
        {playground.type === 'mpl-basics' && <MplBasics lesson={lesson} />}
        {playground.type === 'mpl-stats' && <MplStats lesson={lesson} />}
        {playground.type === 'seaborn-dist' && <SeabornDist lesson={lesson} />}
        {playground.type === 'seaborn-categorical' && <SeabornCategorical lesson={lesson} />}
        {playground.type === 'seaborn-regression' && <SeabornRegression lesson={lesson} />}
        {playground.type === 'math-role' && <MathRole lesson={lesson} />}
        {playground.type === 'stats-role' && <StatsRole lesson={lesson} />}
        {playground.type === 'math-stats-integration' && <MathStatsIntegration lesson={lesson} />}
        {playground.type === 'math-key-areas' && <MathKeyAreas lesson={lesson} />}
        {playground.type === 'la-vectors' && <LaVectors lesson={lesson} />}
        {playground.type === 'la-matrices' && <LaMatrices lesson={lesson} />}
        {playground.type === 'la-det-inv' && <LaDetInv lesson={lesson} />}
        {playground.type === 'la-eigen' && <LaEigen lesson={lesson} />}
        {playground.type === 'la-svd' && <LaSvd lesson={lesson} />}
        {playground.type === 'calc-functions-limits' && <CalcFunctionsLimits lesson={lesson} />}
        {playground.type === 'calc-derivatives' && <CalcDerivatives lesson={lesson} />}
        {playground.type === 'calc-integrals' && <CalcIntegrals lesson={lesson} />}
        {playground.type === 'calc-partial-optim' && <CalcPartialOptim lesson={lesson} />}
        {playground.type === 'prob-rv-dists' && <ProbRvDists lesson={lesson} />}
        {playground.type === 'prob-ev-variance' && <ProbEvVariance lesson={lesson} />}
        {playground.type === 'prob-bayes' && <ProbBayes lesson={lesson} />}
        {playground.type === 'prob-lln-clt' && <ProbLlnClt lesson={lesson} />}
        {playground.type === 'desc-central-dispersion' && <DescCentralDispersion lesson={lesson} />}
        {playground.type === 'desc-shape' && <DescShape lesson={lesson} />}
        {playground.type === 'inf-sampling-ht' && <InfSamplingHt lesson={lesson} />}
        {playground.type === 'inf-errors-reg-anova' && <InfErrorsRegAnova lesson={lesson} />}
        {playground.type === 'bayesian' && <Bayesian lesson={lesson} />}
        {playground.type === 'ml-intro' && <MlIntro lesson={lesson} />}
        {playground.type === 'ml-types' && <MlTypes lesson={lesson} />}
        {playground.type === 'ml-train-eval' && <MlTrainEval lesson={lesson} />}
        {playground.type === 'ml-tasks' && <MlTasks lesson={lesson} />}
        {playground.type === 'supervised-intro' && <SupervisedIntro lesson={lesson} />}
        {playground.type === 'reg-vs-class' && <RegVsClass lesson={lesson} />}
        {playground.type === 'ml-models-reg' && <MlModelsReg lesson={lesson} />}
        {playground.type === 'ml-models-class' && <MlModelsClass lesson={lesson} />}
        {playground.type === 'linear-reg-2' && <LinearReg2 lesson={lesson} />}
        {playground.type === 'ridge-lasso' && <RidgeLasso lesson={lesson} />}
        {playground.type === 'logistic-reg-2' && <LogisticReg2 lesson={lesson} />}
        {playground.type === 'svm-concept' && <SvmConcept lesson={lesson} />}
        {playground.type === 'svm-kernel' && <SvmKernel lesson={lesson} />}
        {playground.type === 'svm-pros-cons' && <SvmProsCons lesson={lesson} />}
        {playground.type === 'dt-structure' && <DtStructure lesson={lesson} />}
        {playground.type === 'dt-how' && <DtHow lesson={lesson} />}
        {playground.type === 'dt-algos' && <DtAlgos lesson={lesson} />}
        {playground.type === 'dt-pros-cons' && <DtProsCons lesson={lesson} />}
        {playground.type === 'rf-concept' && <RfConcept lesson={lesson} />}
        {playground.type === 'rf-build' && <RfBuild lesson={lesson} />}
        {playground.type === 'rf-pros-cons' && <RfProsCons lesson={lesson} />}
        {playground.type === 'gbm-concept' && <GbmConcept lesson={lesson} />}
        {playground.type === 'gbm-train' && <GbmTrain lesson={lesson} />}
        {playground.type === 'gbm-pros-cons' && <GbmProsCons lesson={lesson} />}

        <div className="flex items-start gap-2.5 rounded-xl border-2 border-dashed border-success/40 bg-success-soft/40 p-4 text-sm text-text-primary">
          <Terminal size={16} className="mt-0.5 shrink-0 text-success" />
          <div>
            <strong className="block mb-1 text-success text-[11px] font-bold uppercase tracking-widest">Expected outcome</strong>
            <span className="text-text-secondary leading-relaxed">{playground.expectedOutcome}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
