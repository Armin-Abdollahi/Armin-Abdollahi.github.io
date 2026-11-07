---
layout: archive
title: "Selected Projects"
permalink: /projects/
author_profile: false
---

Research and applied projects that connect machine learning with biomedical signals and imaging. Project status and publication status are described separately.

## NeuroValid · EEG model evaluation

**Question:** Does a model keep useful performance when evaluation focuses on a more specific neural frequency band?<br>
**Work:** Comparative evaluation of EEGNet, Vision Transformers, and Convolutional Transformers across isolated EEG bands; Optuna for model search; RSA and explainability methods to inspect learned representations. Thesis-reported CvT F1 on strictly filtered Mu-band data: **80.78%**.<br>
**Related manuscript:** Under review at *Biomedical Signal Processing and Control*.<br>
[View project on GitHub](https://github.com/Armin-Abdollahi/NeuroValid-BCI-DeepLearning)

## BCI-XAI · Investigating artifact dependence

**Question:** Are classifiers responding to neural activity or correlated ocular artifacts?<br>
**Work:** Explainability-driven investigation using Grad-CAM, saliency maps, and Representational Similarity Analysis to study CNN behavior in rehabilitation BCI.<br>
**Related manuscript:** Under review at *Biomedical Signal Processing and Control*.<br>
[View project on GitHub](https://github.com/Armin-Abdollahi/BCI-XAI-Rehabilitation-Validity)

## Imagined speech · KARA ONE

**Question:** Can EEG support silent communication when speech-related muscle signals contaminate the recordings?<br>
**Work:** Joint project contributing preprocessing and artifact rejection (ICA, ASR), data preparation and feature extraction, and SHAP-based inspection of a co-developed spectro-temporal Transformer. The work remains in progress.<br>
[View project on GitHub](https://github.com/Armin-Abdollahi/Comparative-Deep-Learning-for-BCI-CNNs-vs-Transformers-in-EEG-Signal-Decoding)

## Bone age estimation · Vision Transformer

Implemented a ViT for regression on hand X-ray images from the Atlas dataset. The CV reports a 12% MAE reduction versus traditional CNN baselines. The work was presented at AIMS (Tehran, 2025) and IOAS (Germany, 2025); the IOAS poster appeared in conference proceedings.<br>
[View project on GitHub](https://github.com/Armin-Abdollahi/Bone-Age-Estimation) · [View publication details](/publication/2025-10-17-bone-age-estimation-visual-transformer)

## Tools across projects

Python · PyTorch · MNE-Python · EEGLAB · ICA · ASR · Optuna · SHAP · Grad-CAM · RSA · Vision and Convolutional Transformers
