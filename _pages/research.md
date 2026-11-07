---
layout: archive
title: "Research"
permalink: /research/
author_profile: false
---

My research asks how we can tell whether an EEG decoder has learned neural information that is meaningful and useful. I work across signal processing, deep learning, and explainable AI, with a particular interest in BCI for rehabilitation and communication.

## Research themes

### Reliable decoding for rehabilitation BCI

EEG models may exploit ocular activity and other artifacts that correlate with a task. My master’s research compared EEGNet, Vision Transformers, and Convolutional Transformers across isolated frequency bands, and used Grad-CAM, saliency maps, and Representational Similarity Analysis to examine model behavior. The thesis reports an **80.78% F1-score** for a CvT on strictly filtered Mu-band data; this figure belongs to that specific evaluation setting.

Two related manuscripts are **under review at Biomedical Signal Processing and Control**:

- *The Illusion of Accuracy in Rehabilitation BCI: High-Performance CNNs Learn Artifacts, Not Neural Intent.*
- *A Robust Benchmark for Rehabilitation BCI: Validating Convolutional Transformers on Neurophysiologically Isolated EEG Signals.*

### Imagined speech and silent communication

In a joint project using the KARA ONE dataset, I contributed EEG preprocessing and artifact mitigation pipelines, including ICA and ASR, and an end-to-end data and feature pipeline. The project investigates a co-developed spectro-temporal Transformer and uses SHAP to inspect whether its learned signals align with linguistic intent. A related review and architecture paper is **in preparation**.

### Multimodal neural measurement

During my research internship at the National Brain Mapping Laboratory, I gained practical experience with EEG and fNIRS recording, neurocognitive assessment, experimental paradigms, and biological signal analysis. This perspective helps me connect model design to the conditions under which neural data are collected.

### Medical imaging with transformers

I also implemented a Vision Transformer for bone age estimation from hand X-rays using the Atlas dataset. The work was presented at AIMS in Tehran and IOAS in Germany; the IOAS poster is listed as published in the conference proceedings in my CV.

## Methods and tools

**Neural signal processing:** MNE-Python, EEGLAB, BioSig, wavelets, CSP, ICA, ASR, EEG, fNIRS<br>
**Machine learning:** Python, PyTorch, TensorFlow, Keras, scikit-learn, Optuna, Hugging Face Transformers<br>
**Model inspection:** Grad-CAM, saliency maps, SHAP, Representational Similarity Analysis<br>
**Engineering:** Git, GitHub, Linux, Docker, LaTeX

I don’t use percentage bars for skills: the relevant evidence is the research, code, and teaching linked here.

## Selected links

[Publications](/publications/) · [Projects](/projects/) · [Curriculum vitae](/cv/) · [Google Scholar](https://scholar.google.com/citations?user=_lXpoGEAAAAJ&hl=en)
