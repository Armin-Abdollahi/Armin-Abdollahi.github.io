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

## 🎓 Master's Thesis & Extracted Publications

<div class="research-card">
  <div class="research-header">
    <span class="status-badge">Grade: 20/20</span>
    <h3 style="color: white; margin: 0;">Transformer-based Signal Decoding in BCI</h3>
  </div>
  <div class="research-body">
    <p><strong>Core Research:</strong> Developing neurophysiologically valid Deep Learning models to decode neural intent. This research led to two major journal publications (Under Review at BSPC):</p>
    <ul>
      <li><strong>Project 1: The Illusion of Accuracy.</strong> Using XAI (Grad-CAM, RSA) to prove that SOTA CNNs often rely on high-amplitude artifacts (EOG/EMG) rather than actual neural features.</li>
      <li><strong>Project 2: NeuroValid Benchmark.</strong> Validating <strong>Convolutional Transformers (CvT)</strong> on strictly filtered EEG signals to ensure robust, artifact-resistant decoding.</li>
    </ul>
    <div>
      <span class="tech-tag">Explainable AI (XAI)</span>
      <span class="tech-tag">Convolutional Transformers</span>
      <span class="tech-tag">Artifact Removal</span>
      <span class="tech-tag">MNE-Python</span>
    </div>
  </div>
</div>

## 🔬 Independent Research Projects

<div class="research-card">
  <div class="research-header" style="background: linear-gradient(135deg, #2c3e50 0%, #4ca1af 100%);">
    <span class="status-badge" style="background: #3498db;">Active</span>
    <h3 style="color: white; margin: 0;">Speech BCI: Imagined Speech Decoding</h3>
  </div>
  <div class="research-body">
    <p>Developing a <strong>Spectro-Temporal Transformer</strong> architecture for the classification of phonemes and words from imagined speech using the <strong>KARA ONE</strong> dataset. This project is independent of my thesis and focuses on assistive communication interfaces.</p>
    <div>
      <span class="tech-tag">Spectro-Temporal Modeling</span>
      <span class="tech-tag">KARA ONE</span>
      <span class="tech-tag">Assistive Tech</span>
    </div>
  </div>
</div>

<div class="research-card">
  <div class="research-header" style="background: linear-gradient(135deg, #1e293b 0%, #64748b 100%);">
    <span class="status-badge" style="background: #9b59b6;">Completed</span>
    <h3 style="color: white; margin: 0;">Bone Age Estimation (Medical Vision)</h3>
  </div>
  <div class="research-body">
    <p>Application of <strong>Vision Transformers (ViT)</strong> for pediatric growth assessment using hand X-ray images. This work was presented as a poster at international conferences (Germany & Tehran).</p>
    <div>
      <span class="tech-tag">Vision Transformer</span>
      <span class="tech-tag">Medical Imaging</span>
      <span class="tech-tag">Regression</span>
    </div>
  </div>
</div>

---

## 📚 Publications Summary
* **Book:** Persian Translation of *"BCI: A State-of-the-Art Summary 12"* (Published 2026).
* **Journals:** 2 papers on BCI Robustness and XAI (Under Review).
* **Conference:** Bone Age Estimation via ViT (Poster Presentation).
