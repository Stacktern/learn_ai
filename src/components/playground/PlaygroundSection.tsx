import { lazy, Suspense } from 'react';
import { Layers, Terminal, Loader2 } from 'lucide-react';
import type { Lesson } from '../../types';

const IntroImpact = lazy(() => import('./simulators/IntroImpact'));
const HistoryTimeline = lazy(() => import('./simulators/HistoryTimeline'));
const Industries = lazy(() => import('./simulators/Industries'));
const Comparison = lazy(() => import('./simulators/Comparison'));
const Lifecycle = lazy(() => import('./simulators/Lifecycle'));
const DataCollection = lazy(() => import('./simulators/DataCollection'));
const MissingValues = lazy(() => import('./simulators/MissingValues'));
const Scaling = lazy(() => import('./simulators/Scaling'));
const Visualization = lazy(() => import('./simulators/Visualization'));
const ModelEval = lazy(() => import('./simulators/ModelEval'));
const Deployment = lazy(() => import('./simulators/Deployment'));
const LinearRegression = lazy(() => import('./simulators/LinearRegression'));
const GradientDescent = lazy(() => import('./simulators/GradientDescent'));
const PolynomialRegression = lazy(() => import('./simulators/PolynomialRegression'));
const LogisticRegression = lazy(() => import('./simulators/LogisticRegression'));
const ConfusionMatrix = lazy(() => import('./simulators/ConfusionMatrix'));
const Knn = lazy(() => import('./simulators/Knn'));
const DecisionTree = lazy(() => import('./simulators/DecisionTree'));
const RandomForest = lazy(() => import('./simulators/RandomForest'));
const Svm = lazy(() => import('./simulators/Svm'));
const NaiveBayes = lazy(() => import('./simulators/NaiveBayes'));
const Hyperparameter = lazy(() => import('./simulators/Hyperparameter'));
const Kmeans = lazy(() => import('./simulators/Kmeans'));
const Hierarchical = lazy(() => import('./simulators/Hierarchical'));
const Dbscan = lazy(() => import('./simulators/Dbscan'));
const ClusterEval = lazy(() => import('./simulators/ClusterEval'));
const Svd = lazy(() => import('./simulators/Svd'));
const Pca = lazy(() => import('./simulators/Pca'));
const Tsne = lazy(() => import('./simulators/Tsne'));
const Apriori = lazy(() => import('./simulators/Apriori'));
const Anomaly = lazy(() => import('./simulators/Anomaly'));
const LibPurpose = lazy(() => import('./simulators/LibPurpose'));
const LibOverview = lazy(() => import('./simulators/LibOverview'));
const NumpyFeatures = lazy(() => import('./simulators/NumpyFeatures'));
const NumpyCreate = lazy(() => import('./simulators/NumpyCreate'));
const NumpyOps = lazy(() => import('./simulators/NumpyOps'));
const PandasFeatures = lazy(() => import('./simulators/PandasFeatures'));
const PandasCreateView = lazy(() => import('./simulators/PandasCreateView'));
const PandasSelect = lazy(() => import('./simulators/PandasSelect'));
const PandasMissing = lazy(() => import('./simulators/PandasMissing'));
const PandasOperations = lazy(() => import('./simulators/PandasOperations'));
const PandasGroupBy = lazy(() => import('./simulators/PandasGroupBy'));
const MplLine = lazy(() => import('./simulators/MplLine'));
const MplBasics = lazy(() => import('./simulators/MplBasics'));
const MplStats = lazy(() => import('./simulators/MplStats'));
const SeabornDist = lazy(() => import('./simulators/SeabornDist'));
const SeabornCategorical = lazy(() => import('./simulators/SeabornCategorical'));
const SeabornRegression = lazy(() => import('./simulators/SeabornRegression'));
const MathRole = lazy(() => import('./simulators/MathRole'));
const StatsRole = lazy(() => import('./simulators/StatsRole'));
const MathStatsIntegration = lazy(() => import('./simulators/MathStatsIntegration'));
const MathKeyAreas = lazy(() => import('./simulators/MathKeyAreas'));
const LaVectors = lazy(() => import('./simulators/LaVectors'));
const LaMatrices = lazy(() => import('./simulators/LaMatrices'));
const LaDetInv = lazy(() => import('./simulators/LaDetInv'));
const LaEigen = lazy(() => import('./simulators/LaEigen'));
const LaSvd = lazy(() => import('./simulators/LaSvd'));
const CalcFunctionsLimits = lazy(() => import('./simulators/CalcFunctionsLimits'));
const CalcDerivatives = lazy(() => import('./simulators/CalcDerivatives'));
const CalcIntegrals = lazy(() => import('./simulators/CalcIntegrals'));
const CalcPartialOptim = lazy(() => import('./simulators/CalcPartialOptim'));
const ProbRvDists = lazy(() => import('./simulators/ProbRvDists'));
const ProbEvVariance = lazy(() => import('./simulators/ProbEvVariance'));
const ProbBayes = lazy(() => import('./simulators/ProbBayes'));
const ProbLlnClt = lazy(() => import('./simulators/ProbLlnClt'));
const DescCentralDispersion = lazy(() => import('./simulators/DescCentralDispersion'));
const DescShape = lazy(() => import('./simulators/DescShape'));
const InfSamplingHt = lazy(() => import('./simulators/InfSamplingHt'));
const InfErrorsRegAnova = lazy(() => import('./simulators/InfErrorsRegAnova'));
const Bayesian = lazy(() => import('./simulators/Bayesian'));
const MlIntro = lazy(() => import('./simulators/MlIntro'));
const MlTypes = lazy(() => import('./simulators/MlTypes'));
const MlTrainEval = lazy(() => import('./simulators/MlTrainEval'));
const MlTasks = lazy(() => import('./simulators/MlTasks'));
const SupervisedIntro = lazy(() => import('./simulators/SupervisedIntro'));
const RegVsClass = lazy(() => import('./simulators/RegVsClass'));
const MlModelsReg = lazy(() => import('./simulators/MlModelsReg'));
const MlModelsClass = lazy(() => import('./simulators/MlModelsClass'));
const LinearReg2 = lazy(() => import('./simulators/LinearReg2'));
const RidgeLasso = lazy(() => import('./simulators/RidgeLasso'));
const LogisticReg2 = lazy(() => import('./simulators/LogisticReg2'));
const SvmConcept = lazy(() => import('./simulators/SvmConcept'));
const SvmKernel = lazy(() => import('./simulators/SvmKernel'));
const SvmProsCons = lazy(() => import('./simulators/SvmProsCons'));
const DtStructure = lazy(() => import('./simulators/DtStructure'));
const DtHow = lazy(() => import('./simulators/DtHow'));
const DtAlgos = lazy(() => import('./simulators/DtAlgos'));
const DtProsCons = lazy(() => import('./simulators/DtProsCons'));
const RfConcept = lazy(() => import('./simulators/RfConcept'));
const RfBuild = lazy(() => import('./simulators/RfBuild'));
const RfProsCons = lazy(() => import('./simulators/RfProsCons'));
const GbmConcept = lazy(() => import('./simulators/GbmConcept'));
const GbmTrain = lazy(() => import('./simulators/GbmTrain'));
const GbmProsCons = lazy(() => import('./simulators/GbmProsCons'));
const HpOverview = lazy(() => import('./simulators/HpOverview'));
const HpEda = lazy(() => import('./simulators/HpEda'));
const HpPreprocess = lazy(() => import('./simulators/HpPreprocess'));
const HpRf = lazy(() => import('./simulators/HpRf'));
const HpSvm = lazy(() => import('./simulators/HpSvm'));
const CovidOverview = lazy(() => import('./simulators/CovidOverview'));
const CovidLoad = lazy(() => import('./simulators/CovidLoad'));
const CovidPrep = lazy(() => import('./simulators/CovidPrep'));
const CovidEda = lazy(() => import('./simulators/CovidEda'));
const CovidLstm = lazy(() => import('./simulators/CovidLstm'));
const CovidSvr = lazy(() => import('./simulators/CovidSvr'));
const PneuOverview = lazy(() => import('./simulators/PneuOverview'));
const PneuPrep = lazy(() => import('./simulators/PneuPrep'));
const CnnCore = lazy(() => import('./simulators/CnnCore'));
const CnnHow = lazy(() => import('./simulators/CnnHow'));
const CnnAdvantages = lazy(() => import('./simulators/CnnAdvantages'));
const PneuModel = lazy(() => import('./simulators/PneuModel'));
const PneuTrain = lazy(() => import('./simulators/PneuTrain'));
const PneuEval = lazy(() => import('./simulators/PneuEval'));
const PneuSummary = lazy(() => import('./simulators/PneuSummary'));

interface PlaygroundSectionProps {
  lesson: Lesson;
}

function SimulatorFallback() {
  return (
    <div className="rounded-2xl border border-border-app bg-surface p-10 flex flex-col items-center justify-center gap-3 text-text-muted">
      <Loader2 size={22} className="animate-spin text-accent" />
      <div className="text-[11px] font-mono uppercase tracking-widest">Loading simulator…</div>
    </div>
  );
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

        <Suspense fallback={<SimulatorFallback />}>
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
          {playground.type === 'hp-overview' && <HpOverview lesson={lesson} />}
          {playground.type === 'hp-eda' && <HpEda lesson={lesson} />}
          {playground.type === 'hp-preprocess' && <HpPreprocess lesson={lesson} />}
          {playground.type === 'hp-rf' && <HpRf lesson={lesson} />}
          {playground.type === 'hp-svm' && <HpSvm lesson={lesson} />}
          {playground.type === 'covid-overview' && <CovidOverview lesson={lesson} />}
          {playground.type === 'covid-load' && <CovidLoad lesson={lesson} />}
          {playground.type === 'covid-prep' && <CovidPrep lesson={lesson} />}
          {playground.type === 'covid-eda' && <CovidEda lesson={lesson} />}
          {playground.type === 'covid-lstm' && <CovidLstm lesson={lesson} />}
          {playground.type === 'covid-svr' && <CovidSvr lesson={lesson} />}
          {playground.type === 'pneu-overview' && <PneuOverview lesson={lesson} />}
          {playground.type === 'pneu-prep' && <PneuPrep lesson={lesson} />}
          {playground.type === 'cnn-core' && <CnnCore lesson={lesson} />}
          {playground.type === 'cnn-how' && <CnnHow lesson={lesson} />}
          {playground.type === 'cnn-advantages' && <CnnAdvantages lesson={lesson} />}
          {playground.type === 'pneumodel' && <PneuModel lesson={lesson} />}
          {playground.type === 'pneu-train' && <PneuTrain lesson={lesson} />}
          {playground.type === 'pneu-eval' && <PneuEval lesson={lesson} />}
          {playground.type === 'pneu-summary' && <PneuSummary lesson={lesson} />}
        </Suspense>

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
