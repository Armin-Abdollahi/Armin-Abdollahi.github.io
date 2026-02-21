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
  .research-card:hover { transform: translateY(-5px); }
  .research-header {
    background: linear-gradient(135deg, #1a3a5f 0%, #2980b9 100%);
    color: white;
    padding: 20px 25px;
  }
  .research-body { padding: 25px; }
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

## 🎓 Master's Thesis & Extracted Journal Papers

<div class="research-card">
  <div class="research-header">
    <span class="status-badge">Grade: 20/20</span>
    <h3 style="color: white; margin: 0;">Developing Transformer-based Deep Learning model for Signal Decoding in BCI</h3>
  </div>
  <div class="research-body">
    <p><strong>Thesis Overview:</strong> Pioneered the development of neurophysiologically robust architectures to decode motor intent from EEG signals. This research exposed the "Clever Hans" effect in SOTA models and led to two major journal publications (Under Review at <i>Biomedical Signal Processing and Control - BSPC</i>):</p>
    
    <ul style="margin-bottom: 20px;">
      <li><strong>Paper 1: The Illusion of Accuracy in Rehabilitation BCI.</strong> An Explainable AI (XAI) investigation using Grad-CAM, Saliency Maps, and RSA to prove that high-performance CNNs often learn high-amplitude ocular artifacts (EOG) rather than true neural intent.</li>
      <li><strong>Paper 2: A Robust Benchmark for Rehabilitation BCI.</strong> Validating <strong>Convolutional Transformers (CvT)</strong> on neurophysiologically isolated EEG signals to ensure safe and reliable intent decoding for clinical use.</li>
    </ul>

    <div>
      <span class="tech-tag">Explainable AI (XAI)</span>
      <span class="tech-tag">Convolutional Transformers (CvT)</span>
      <span class="tech-tag">RSA Analysis</span>
      <span class="tech-tag">Artifact Robustness</span>
      <span class="tech-tag">Optuna</span>
    </div>
  </div>
</div>

## 🔬 Independent & Applied Research

<div class="research-card">
  <div class="research-header" style="background: linear-gradient(135deg, #2c3e50 0%, #4ca1af 100%);">
    <span class="status-badge" style="background: #3498db;">Active</span>
    <h3 style="color: white; margin: 0;">Speech BCI: Imagined Speech Decoding</h3>
  </div>
  <div class="research-body">
    <p><strong>Independent Project:</strong> Developing an end-to-end <strong>Spectro-Temporal Transformer</strong> architecture to classify phonemes and words directly from EEG signals using the <strong>KARA ONE</strong> dataset. This work focuses on building robust silent communication interfaces independent of my thesis research.</p>
    <div>
      <span class="tech-tag">Spectro-Temporal Modeling</span>
      <span class="tech-tag">KARA ONE Dataset</span>
      <span class="tech-tag">Assistive Tech</span>
      <span class="tech-tag">SHAP</span>
    </div>
  </div>
</div>

<div class="research-card">
  <div class="research-header" style="background: linear-gradient(135deg, #1e293b 0%, #64748b 100%);">
    <span class="status-badge" style="background: #9b59b6;">Completed</span>
    <h3 style="color: white; margin: 0;">Bone Age Estimation (Medical Computer Vision)</h3>
  </div>
  <div class="research-body">
    <p>Implemented a <strong>Vision Transformer (ViT)</strong> for regression analysis on pediatric hand X-ray images. This project achieved a lower Mean Absolute Error (MAE) compared to traditional CNNs and was presented at the <strong>AIMS</strong> and <strong>IOAS</strong> conferences (Tehran & Germany).</p>
    <div>
      <span class="tech-tag">Vision Transformer (ViT)</span>
      <span class="tech-tag">Medical Imaging</span>
      <span class="tech-tag">Regression Analysis</span>
    </div>
  </div>
</div>

---

## 🛠 Technical Stack & Methodologies

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px; margin-top: 20px;">

  <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 20px; box-shadow: 0 4px 6px rgba(0,0,0,0.02);">
    <h4 style="color: #1a3a5f; margin-top: 0;"><i class="fa fa-code"></i> AI & Modeling</h4>
    <div style="display: flex; flex-wrap: wrap; gap: 8px;">
      <span class="tech-tag">Python</span>
      <span class="tech-tag">PyTorch</span>
      <span class="tech-tag">Transformers (CvT, ViT)</span>
      <span class="tech-tag">Optuna</span>
      <span class="tech-tag">XAI (SHAP, Grad-CAM)</span>
    </div>
  </div>

  <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 20px; box-shadow: 0 4px 6px rgba(0,0,0,0.02);">
    <h4 style="color: #1a3a5f; margin-top: 0;"><i class="fa fa-braille"></i> Neuro-Engineering</h4>
    <div style="display: flex; flex-wrap: wrap; gap: 8px;">
      <span class="tech-tag">MNE-Python</span>
      <span class="tech-tag">EEGLAB</span>
      <span class="tech-tag">fNIRS/EEG Recording</span>
      <span class="tech-tag">ASR / ICA</span>
      <span class="tech-tag">RSA Analysis</span>
    </div>
  </div>

</div>

<div style="margin-top: 30px; background: #1a3a5f; padding: 25px; border-radius: 12px; color: white;">
  <h4 style="color: white; margin-top: 0; margin-bottom: 20px;">Methodological Proficiency</h4>
  
  <div style="margin-bottom: 15px;">
    <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
      <span>Deep Learning (PyTorch & Transformers)</span>
      <span>95%</span>
    </div>
    <div style="background: rgba(255,255,255,0.2); height: 8px; border-radius: 4px;">
      <div style="background: #10b981; width: 95%; height: 100%; border-radius: 4px;"></div>
    </div>
  </div>

  <div style="margin-bottom: 15px;">
    <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
      <span>Neural Signal Processing (EEG/fNIRS)</span>
      <span>90%</span>
    </div>
    <div style="background: rgba(255,255,255,0.2); height: 8px; border-radius: 4px;">
      <div style="background: #3498db; width: 90%; height: 100%; border-radius: 4px;"></div>
    </div>
  </div>

  <div style="margin-bottom: 0;">
    <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
      <span>Explainable AI & Model Validation</span>
      <span>85%</span>
    </div>
    <div style="background: rgba(255,255,255,0.2); height: 8px; border-radius: 4px;">
      <div style="background: #f59e0b; width: 85%; height: 100%; border-radius: 4px;"></div>
    </div>
  </div>
</div>
