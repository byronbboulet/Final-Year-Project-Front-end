import { Component } from '@angular/core';
import { Tutorial } from '../../../models/tutorial';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tutorials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tutorials.component.html',
  styleUrl: './tutorials.component.css'
})

export class TutorialsComponent {
 tutorials: Tutorial[] = [
  new Tutorial(1, "Why Passivity Breeds Mediocrity and Mental Illness", "This video explores the psychological effects of passivity on mental health and personal development, revealing how a lack of proactive engagement with life can lead to mediocrity and mental health issues.", "../../../assets/Why Passivity Breeds Mediocrity and Mental Illness.mp4"),
  new Tutorial(2, "The Ideal Body: How Our Body Shapes Our Character", "Dive into the fascinating relationship between physical well-being and personality development. This tutorial unveils how our perception of the ideal body influences our character and self-esteem.", "../../../assets/The Ideal Body How our Body Shapes our Character.mp4"),
  new Tutorial(3, "Why an Unhealthy Mind Creates an Unhealthy Body", "Uncover the intricate connection between mental health and physical health. This insightful video demonstrates how psychological stress and negative thoughts manifest as physical ailments.", "../../../assets/Why an Unhealthy Mind creates an Unhealthy Body.mp4"),
  new Tutorial(4, "The School of Anxiety is The School of Greatness", "Learn how overcoming anxiety can lead to greatness. This tutorial offers strategies for harnessing anxiety as a powerful motivator for personal achievement and growth.", "../../../assets/The School of Anxiety is The School of Greatness.mp4")
];
 
  constructor() { }
}