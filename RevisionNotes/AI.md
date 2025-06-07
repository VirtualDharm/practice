# Introduction to LLMs: A Useful Handbook

[Create a Large Language Model from Scratch with Python – Tutorial](https://www.youtube.com/watch?v=UU1WVnMk4E8)  
[Introduction to LLMs: A Useful Handbook](https://dev.to/umairian/introduction-to-llms-a-useful-handbook-2po?context=digest)
https://dev.to/composiodev/13-open-source-tools-that-will-make-you-99-more-likely-to-land-any-ai-job-3049
---

## Neural Networks

- **Input Layer**: Where data first enters the model.
- **Hidden Layers**: Where computations happen, allowing the network to learn patterns.
- **Output Layer**: Final decision or prediction is made here.

---

## Natural Language Processing (NLP)

Enables machines to understand and generate human language. Key tasks include:

- **Tokenization**: Breaking text into smaller components (words or subwords).
- **Parsing**: Understanding the structure of sentences.
- **Sentiment Analysis**: Determining the tone of the text (positive, negative, neutral).

---

## Large Language Models (LLMs)

- **LLMs** are neural networks designed to process vast text data, understanding language patterns and context.
- **Tasks**: Answering questions, writing essays, translating languages, etc.
- **Core Idea**: Predicting the next word in a sentence.

---

## The Transformer Architecture

- **Transformers** revolutionized NLP by efficiently handling sequences of data.
- Introduced in the paper *Attention Is All You Need*.
- Traditional models like **RNNs** struggled with long sequences; transformers solve this using an **attention mechanism**.
- Used in modern models like **GPT-4**.

---

## Language Modeling

- Helps LLMs understand word probabilities, enabling coherent text generation.

---

## Tokenization

Sentences are split into smaller units called **tokens**. 

- **Subword Tokenization**: Breaking words into smaller meaningful parts.  
  Example: `"It's raining"` becomes `["It", "'", "s", "rain", "ing", "."]`.

---

## Embeddings

- Converts tokens into numerical vectors for easier model processing.  
  Example:
  - `cat → [1.2, 0.5]`
  - `dog → [1.1, 0.6]`
  - `car → [4.0, 3.5]`

---

## Training & Fine-Tuning

- **Pre-training**: LLMs are trained on general datasets like *The Pile* and *CommonCrawl*.
- **Fine-tuning**: The model is further trained on specific datasets (e.g., Reddit Posts) for specialized tasks.

---

## Context Size

- Determines the maximum number of tokens a model can process at once.
- Example: **GPT-3.5 Turbo** can handle 16,000 tokens, whereas **GPT-4-0125** can handle up to 128,000 tokens.

---

## Scaling Laws

Performance depends on factors like:

- **Number of Parameters**
- **Training Data Size**
- **Computational Power (FLOPs)**

---

## Prompts

Clear and context-rich prompts improve output quality.  
Example: Instead of *“Write about Allama Iqbal,”* say *“Write a 500-word article on the great poet Allama Iqbal.”*

---

## Challenges

- **Hallucinations**: Models might generate incorrect facts.
- **Bias**: Reflects biases in training data, leading to skewed outputs.

---
AI>ML>NN(software that learns from mistakes using Perceptron)>Big Data>Deep Learning>Strong AI

In the Neural Network Model, input data (yellow) are processed against a hidden layer (blue) before producing the final output (red).

R is a programming language for Graphics and Statistical computing.
Linear Modeling
Nonlinear Modeling
Statistical Tests
Time-series Analysis
Classification
Clustering

Python
NumPy (Library for working with Arrays)
SciPy (Library for Statistical Science)
Matplotlib (Graph Plotting Library)
NLTK (Natural Language Toolkit)
TensorFlow (Machine Learning)

SHARK,MLPACK : C++ library: algorithms, linear regression, neural networks & clustering.

Brain.js : NN
ml5.js : friendly like 3 lines for imae classification.
<img id="myImage" src="pic1.jpg" width="100%"> (not learn)
<script>
const classifier = ml5.imageClassifier('MobileNet');
classifier.classify(document.getElementById("myImage"), gotResult);
function gotResult(error, results)
{ ... }
</script>
HTML Canvas, Plotly.js, Chart.js, Google Chart, D3.js
Plotting Equations, Plotting Values, WebGL API
WebGL : 2d and 3D graphics, runs on both integrated and standalone graphic cards in any PC.

use tenorflow for better practing: https://playground.tensorflow.org/#activation=tanh&batchSize=10&dataset=circle&regDataset=reg-plane&learningRate=0.03&regularizationRate=0&noise=0&networkShape=4,2&seed=0.64246&showTestData=false&discretize=false&percTrainData=50&x=true&y=true&xTimesY=false&xSquared=false&ySquared=false&cosX=false&sinX=false&cosY=false&sinY=false&collectStats=false&problem=classification&initZero=false&hideText=false

uses:
Image classification
To compose music in the style of famous composers
Drug discovery, shorter development time, and lower drug costs
"big data" for making better medical or clinical decisions
Discovering potential trends
Discovering patterns in data
Discovering relationships between data
Discovering Clusters and Correlations
30 sec reels: eleven labs(voices), together.ai(images), movie,py(editing)
Facial Recognition
Project Baseline: everyone can contribute

Scatter Plot: points scattered over an area representing the relationship between two values

A Perceptron is an Artificial Neuron. It is the simplest possible Neural Network.
Perceptron Inputs (nodes)
Node values (1, 0, 1, 0, 1)
Node Weights (0.7, 0.6, 0.5, 0.3, 0.4)
Summation
Treshold Value
Activation Function then Training function : this.weights[i] += this.learnc * error * inputs[i];
Summation (sum > treshold)

Perceptron Learning
The perceptron can learn from examples through a process called training.

During training, the perceptron adjusts its weights based on observed errors. This is typically done using a learning algorithm such as the perceptron learning rule or a backpropagation algorithm.

The learning process presents the perceptron with labeled examples, where the desired output is known. The perceptron compares its output with the desired output and adjusts its weights accordingly, aiming to minimize the error between the predicted and desired outputs.

The learning process allows the perceptron to learn the weights that enable it to make accurate predictions for new, unknown inputs.

For each mistake, while training the Perceptron, the weights will be adjusted with a small fraction. This small fraction is the "Perceptron's learning rate".

To avoid this, we give the perceptron an extra input with the value of 1. This is called a bias.

Training function: guess work phir adjustment, After each guess, the perceptron calculates how wrong the guess was. If the guess is wrong, the perceptron adjusts the bias and the weights so that the guess will be a little bit more correct the next time. This type of learning is called backpropagation. After trying (a few thousand times) your perceptron will become quite good at guessing. check ML training code.

Adjust the learning rate
Increase the number of training data
Increase the number of training iterations