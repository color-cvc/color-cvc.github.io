---
layout: page
title: sRGB-LSMI
description: Revisiting Image Fusion for Multi-Illuminant White-Balance Correction
img: assets/img/datasets/relighting-single-image/teaser.gif
importance: 1
category: work
related_publications: true
---

White balance (WB) correction in scenes with multiple illuminants remains a persistent challenge in computer vision. Recent methods explored fusion-based approaches, where a neural network linearly blends multiple sRGB versions of an input image, each processed with predefined WB presets. In this paper, we demonstrate that linear blending is inherently constrained, propose a new method to blend the WB presets, and introduce a new dataset: sRGB-LSMI.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/datasets/relighting-single-image/IRS.png" title="ISR dataset" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Example images from the sRGB-LSMI. All the images correspond to the same scene. Each row has a different number of illuminants (minimum two). From top to bottom, (1) outdoor light and light bulbs above the table, (2) outdoor light and a lamp behind the camera, and (3) all three light sources. In each column, render the image under different WB presets. The last column corresponds to the ground truth corrected image.
</div>

We repurpose the Sony and Nikon splits of the [LSMI dataset](https://www.dykim.me/projects/lsmi). We render all the images with multiple illuminants into five different WB presets: Fluorescent (2850 Kelvin), Tungsten (3800 K), Daylight (5500 K), Cloudy (6500 K), and Shade (7500 K). To obtain the ground truth, we first apply WB correction using the color chart on the single illuminant image, as shown in step 1 of the Figure below. However, this initial ground truth image often has less brightness than an image of the same scene with additional light sources. To correct the brightness discrepancies, we render the multi-illuminant image to sRGB using a standard AWB procedure as shown in step 2 of the Figure below. While AWB does not produce a correct WB image under mixed lighting, it provides a reference for per-pixel brightness normalization of the single-illuminant ground truth image, as shown in step 3 of the Figure below. This brightness adjustment assumes a Lambertian reflectance model, a fair approximation for plausible white-balanced images that maintain spatial consistency with multi-illuminant images. Our dataset provides a valuable benchmark for training and evaluating fusion-based multi-illuminant WB methods, as it introduces real-world variations absent in the synthetic test set. The final dataset includes 16,284 sRGB images from the Nikon and Sony sets.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/datasets/relighting-single-image/IRS.png" title="ISR dataset" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
  Procedure for generating a ground truth sRGB image for scenes with multiple illuminants.
</div>

The dataset can be downloaded separately by:

[Sony Split - 600px x 800px]()

[Nikon Split - 600px x 800px](),

[Sony Split - 4K (Soon - We are figuring out how to store it.)]()

[Nikon Split - 4K (Soon - We are figuring out how to store it.)]()

## References




