---
layout: page
title: Revisiting Image Fusion for Multi-Illuminant White-Balance Correction
permalink: /revisitingmiwb/
img: assets/img/datasets/revisitingmiwb/iccv25_revisitingmiwb.jpg
paper: https://openaccess.thecvf.com/content/ICCV2025/papers/Serrano-Lozano_Revisiting_Image_Fusion_for_Multi-Illuminant_White-Balance_Correction_ICCV_2025_paper.pdf
code: https://github.com/davidserra9/revisitingMIWB
date: 2025-09-01
dataset: true
hide_navbar: true
---

<div class="project-page">

<!-- Authors and Institutions -->
<div class="authors">
  <div class="author-block">
    <strong>David Serrano-Lozano</strong><sup>1,2</sup>,
    <strong>Aditya Arora</strong><sup>3,4</sup>,
    <strong>Luis Herranz</strong><sup>5</sup>,<br>
    <strong>Konstantinos G. Derpanis</strong><sup>3,4</sup>,
    <strong>Michael S. Brown</strong><sup>3</sup>, and
    <strong>Javier Vazquez-Corral</strong><sup>1,2</sup>
  </div>
  <div class="affiliations">
    <sup>1</sup>Computer Vision Center,
    <sup>2</sup>Universitat Aut&ograve;noma de Barcelona,
    <sup>3</sup>York University,
    <sup>4</sup>Vector Institute,
    <sup>5</sup>Universidad Aut&oacute;noma de Madrid
  </div>
  <div class="conference">
    International Conference on Computer Vision (ICCV), 2025
  </div>
  <div class="note">
    This is the website for the sRGB-LSMI dataset. If you want to visit the full project page of the paper, please press the Project Page button.
  </div>
</div>

<!-- Buttons -->
<div class="links" style="text-align: center; margin: 2rem 0;">
  <a href="https://arxiv.org/abs/2503.14774" class="btn z-depth-0" role="button" target="_blank">
    <i class="fa-solid fa-file-pdf"></i> Paper
  </a>
  <a href="https://github.com/davidserra9/revisitingMIWB" class="btn z-depth-0" role="button" target="_blank">
    <i class="fa-brands fa-github"></i> Code
  </a>
  <a href="https://revisitingmiwb.github.io" class="btn z-depth-0" role="button" target="_blank">
    <i class="fa-solid fa-globe"></i> Project Page
  </a>
  <a href="https://www.youtube.com/watch?v=2Lb1d8EgZe8" class="btn z-depth-0" role="button" target="_blank">
    <i class="fa-solid fa-video"></i> Video
  </a>
  <a href="https://revisitingmiwb.github.io/static/pdfs/poster.pdf" class="btn z-depth-0" role="button" target="_blank">
    <i class="fa-solid fa-image"></i> Poster
  </a>
</div>

<!-- Dataset Overview -->
<div class="method" style="margin-top: 3rem;">
  <h2>sRGB-LSMI Dataset</h2>
  <p>
    White balance (WB) correction in scenes with multiple illuminants remains a persistent challenge in computer vision. Recent methods explored fusion-based approaches, where a neural network linearly blends multiple sRGB versions of an input image, each processed with predefined WB presets. In this paper, we demonstrate that linear blending is inherently constrained, propose a new method to blend the WB presets, and introduce a new dataset: <strong>sRGB-LSMI</strong>.
  </p>
</div>

<!-- Teaser -->
<div class="teaser">
  <div class="row">
    <div class="col-sm mt-3 mt-md-0">
      {% include figure.liquid loading="eager" path="assets/img/datasets/revisitingmiwb/iccv25_revisitingmiwb.jpg" title="sRGB-LSMI dataset" class="img-fluid rounded z-depth-1" %}
    </div>
  </div>
  <div class="caption" style="margin-top: 1rem;">
    Example images from the sRGB-LSMI. All the images correspond to the same scene. Each row has a different number of illuminants (minimum two). From top to bottom, (1) outdoor light and light bulbs above the table, (2) outdoor light and a lamp behind the camera, and (3) all three light sources. In each column, render the image under different WB presets. The last column corresponds to the ground truth corrected image.
  </div>
</div>

<!-- Dataset Construction -->
<div class="method" style="margin-top: 3rem;">
  <h2>Dataset Construction</h2>
  <p>
    We repurpose the Sony and Nikon splits of the <a href="https://www.dykim.me/projects/lsmi">LSMI dataset</a>. We render all the images with multiple illuminants into five different WB presets: Fluorescent (2850 Kelvin), Tungsten (3800 K), Daylight (5500 K), Cloudy (6500 K), and Shade (7500 K). To obtain the ground truth, we first apply WB correction using the color chart on the single illuminant image, as shown in step 1 of the Figure below. However, this initial ground truth image often has less brightness than an image of the same scene with additional light sources. To correct the brightness discrepancies, we render the multi-illuminant image to sRGB using a standard AWB procedure as shown in step 2 of the Figure below. While AWB does not produce a correct WB image under mixed lighting, it provides a reference for per-pixel brightness normalization of the single-illuminant ground truth image, as shown in step 3 of the Figure below. This brightness adjustment assumes a Lambertian reflectance model, a fair approximation for plausible white-balanced images that maintain spatial consistency with multi-illuminant images. Our dataset provides a valuable benchmark for training and evaluating fusion-based multi-illuminant WB methods, as it introduces real-world variations absent in the synthetic test set. The final dataset includes 16,284 sRGB images from the Nikon and Sony sets.
  </p>

  <div class="row">
    <div class="col-sm mt-3 mt-md-0">
      {% include figure.liquid loading="eager" path="assets/img/datasets/revisitingmiwb/dataset_creation.jpg" title="GT creation" class="img-fluid rounded z-depth-1" %}
    </div>
  </div>
  <div class="caption" style="margin-top: 1rem;">
    Procedure for generating a ground truth sRGB image for scenes with multiple illuminants.
  </div>
</div>

<!-- Downloads -->
<div class="method" style="margin-top: 3rem;">
  <h2>Download</h2>
  <p>The dataset can be downloaded separately by:</p>
  <ul>
    <li><a href="">Sony Split - 600px x 800px</a></li>
    <li><a href="">Nikon Split - 600px x 800px</a></li>
  </ul>
</div>

<!-- Citation -->
<div class="citation" id="citation" style="margin-top: 3rem;">
  <h2>Citation</h2>
  <p>If you find this work useful for your research, please cite:</p>
  <pre style="background-color: #f5f5f5; padding: 1rem; border-radius: 5px; overflow-x: auto;">
<code>@inproceedings{revisitingmiwb2025,
  title={Revisiting Image Fusion for Multi-Illuminant White-Balance Correction},
  author={Serrano-Lozano, David and Arora, Aditya and Herranz, Luis and Derpanis, Konstantinos G. and Brown, Michael S. and Vazquez-Corral, Javier},
  booktitle={International Conference on Computer Vision},
  year={2025}
}</code></pre>
  <p>If you use the sRGB-LSMI dataset, please also cite the original LSMI dataset:</p>
  <pre style="background-color: #f5f5f5; padding: 1rem; border-radius: 5px; overflow-x: auto;">
<code>@inproceedings{Kim2021LSMI,
  title={Large Scale Multi-Illuminant (LSMI) Dataset for Developing White Balance Algorithm Under Mixed Illumination},
  author={Kim, Dongyoung and Kim, Jinwoo and Nam, Seonghyeon and Lee, Dongwoo and Lee, Yeonkyung and Kang, Nahyup and Lee, Hyong-Euk and Yoo, ByungIn and Han, Jae-Joon and Kim, Seon Joo},
  booktitle={Proceedings of the IEEE/CVF International Conference on Computer Vision (ICCV)},
  year={2021}
}</code></pre>
</div>

<!-- Acknowledgments -->
<div class="acknowledgments" style="margin-top: 3rem;">
  <h2>Acknowledgments</h2>
  <p>
    This work was partially supported by grants PID2021-128178OB-I00, PID2024-162555OB-I00 funded by MCIN/AEI/10.13039/501100011033 and by ERDF/EU, and by the Generalitat de Catalunya &mdash; Departament de Recerca i Universitats with reference 2021SGR01499 and CERCA Program. DSL also acknowledges the FPI grant from the Spanish Ministry of Science and Innovation (PRE2022-101525). LH was also supported by the Ramon y Cajal grant RYC2019-027020-I. This work was also partially supported by the grant C&agrave;tedra ENIA UAB-Cru&iuml;lla (TSI-100929-2023-2) from the Ministry of Economic Affairs and Digital Transition of Spain. This work was funded in part by the CFREF (VISTA) program, an NSERC Discovery Grants, and the Canada Research Chair program.
  </p>
</div>

</div>

<style>
.project-page {
  max-width: 900px;
  margin: 0 auto;
}

.authors {
  text-align: center;
  margin-bottom: 2rem;
  margin-top: 2rem;
}

.author-block {
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
}

.affiliations {
  font-size: 0.95rem;
  color: #666;
  line-height: 1.6;
}

.conference {
  font-size: 1rem;
  font-weight: 500;
  margin-top: 0.5rem;
}

.note {
  font-style: italic;
  font-size: 0.9rem;
  color: #666;
  margin-top: 0.5rem;
}

.project-page .links a.btn {
  margin: 0.5rem;
  padding: 0.6rem 1.5rem;
  font-size: 1rem;
}
</style>
