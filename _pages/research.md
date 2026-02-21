---
layout: archive
title: "Research Portfolio"
permalink: /research/
author_profile: true
---

<style>
  .research-card {
    background: #ffffff;
    border-radius: 12px;
    margin-bottom: 2.5rem;
    padding: 0;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0,0,0,0.08);
    border: 1px solid #e2e8f0;
    transition: transform 0.3s ease;
  }
  .research-card:hover {
    transform: translateY(-5px);
  }
  .research-header {
    background: linear-gradient(135deg, #1a3a5f 0%, #2980b9 100%);
    color: white;
    padding: 20px 25px;
  }
  .research-body {
    padding: 25px;
  }
  .tech-tag {
    display: inline-block;
    background: #f1f5f9;
    color: #1a3a5f;
    padding: 4px 12px;
    border-radius: 20px;
    font-size: 0.8em;
    font-weight: 600;
    margin-right: 8px;
    margin-bottom: 8px;
    border: 1px solid #cbd5e1;
  }
  .status-badge {
    float: right;
    font-size: 0.7em;
    background: #10b981;
    color: white;
    padding: 3px 10px;
    border-radius: 12px;
    text-transform: uppercase;
  }
</style>

## 🧠 Core Research (Neuro-AI & BCI)

<div class="research-card">
  <div class="research-header">
    <span class="status-badge" style="background: #1a3a5f; border: 1px solid white;">Active Project</span>
    <h3 style="color: white; margin: 0;">NeuroValid: Robust BCI Benchmarking</h3>
  </div>
  <div class="research-body">
    <p><strong>Explainable Deep Learning:</strong> Developed a comparative benchmark using <strong>Optuna</strong> to evaluate CNNs (EEGNet) vs. Convolutional Transformers (CvT). I utilized <strong>Grad-CAM</strong> and <strong>RSA</strong> to expose the "Clever Hans" effect, proving that SOTA models often overfit to ocular artifacts (EOG) instead of true neural intent.</p>
    <div>
      <span class="tech-tag">XAI</span>
      <span class="tech-tag">Convolutional Transformer (CvT)</span>
      <span class="tech-tag">Optuna</span>
      <span class="tech-tag">RSA Analysis</span>
    </div>
  </div>
</div>

<div class="research-card">
  <div class="research-header">
    <span class="status-badge">Thesis Focus (20/20)</span>
    <h3 style="color: white; margin: 0;">Silent Communication & Imagined Speech</h3>
  </div>
  <div class="research-body">
    <p><strong>Master's Thesis:</strong> Engineering an end-to-end <strong>Spectro-Temporal Transformer</strong> architecture to decode phonemes and words from EEG signals using the <strong>KARA ONE</strong> dataset. Focus includes mitigating EMG contamination while capturing long-range temporal dependencies.</p>
    <div>
      <span class="tech-tag">Hybrid Transformer-RNN</span>
      <span class="tech-tag">Spectro-Temporal Modeling</span>
      <span class="tech-tag">KARA ONE Dataset</span>
      <span class="tech-tag">SHAP</span>
    </div>
    <div style="margin-top: 15px;">
      <img src="https://github.com/user-attachments/assets/36bbc47d-6e87-4e53-a2da-55f3adfabf7f" alt="Neural Architecture" style="width: 100%; border-radius: 8px; border: 1px solid #eee;">
    </div>
  </div>
</div>

## 🔬 Multimodal & Applied AI

<div class="research-card">
  <div class="research-header">
    <span class="status-badge" style="background: #3498db;">Laboratory Internship</span>
    <h3 style="color: white; margin: 0;">Multimodal Neuro-Imaging (NBML)</h3>
  </div>
  <div class="research-body">
    <p>Hands-on expertise at the <strong>National Brain Mapping Laboratory</strong> in recording and analyzing <strong>fNIRS</strong> and <strong>EEG</strong> signals. Designed experimental paradigms for neuro-cognitive assessments and neurofeedback.</p>
    <div>
      <span class="tech-tag">fNIRS</span>
      <span class="tech-tag">Signal Recording</span>
      <span class="tech-tag">MNE-Python</span>
      <span class="tech-tag">Experimental Design</span>
    </div>
  </div>
</div>

<div class="research-card">
  <div class="research-header">
    <span class="status-badge" style="background: #64748b;">Computer Vision</span>
    <h3 style="color: white; margin: 0;">Vision Transformers for Medical Imaging</h3>
  </div>
  <div class="research-body">
    <p>Implemented <strong>Vision Transformers (ViT)</strong> for pediatric bone age estimation on hand X-ray images, achieving lower MAE compared to traditional CNN baselines.</p>
    <div>
      <span class="tech-tag">ViT</span>
      <span class="tech-tag">Regression</span>
      <span class="tech-tag">Pediatric Care</span>
    </div>
  </div>
</div>

---

## 📊 Technical Stack & Methodologies
<div style="background: #f8fafc; padding: 20px; border-radius: 12px; border: 1px dashed #cbd5e1;">
  <div style="display: flex; flex-wrap: wrap; gap: 20px;">
    <div style="flex: 1; min-width: 200px;">
      <strong>Architectures:</strong> CvT, ViT, Hybrid Transformer-RNN, 1D-CNN
    </div>
    <div style="flex: 1; min-width: 200px;">
      <strong>Signal Tools:</strong> MNE-Python, EEGLAB, BioSig, ASR/ICA
    </div>
    <div style="flex: 1; min-width: 200px;">
      <strong>Deep Learning:</strong> PyTorch, TensorFlow, Optuna, Hugging Face
    </div>
  </div>
</div>
