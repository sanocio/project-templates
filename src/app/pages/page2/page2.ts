import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-page2',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './page2.html',
  styleUrl: './page2.scss',
})
export class Page2 implements OnInit {
  values: number[] = [0, 0, 0, 0, 0, 0];
  stats: any = {};
  Math = Math;

  ngOnInit() {
    this.calculateStatistics();
  }

  calculateStatistics() {
    // Filter out zeros
    const validValues = this.values.filter(v => v !== 0 && v !== null && v !== undefined);

    if (validValues.length === 0) {
      this.stats = {
        count: 0,
        sum: 0,
        average: 0,
        median: 0,
        mode: 0,
        min: 0,
        max: 0,
        range: 0,
        variance: 0,
        stdDev: 0,
        sortedValues: []
      };
      return;
    }

    const sorted = [...validValues].sort((a, b) => a - b);
    const sum = validValues.reduce((a, b) => a + b, 0);
    const average = sum / validValues.length;
    const min = Math.min(...validValues);
    const max = Math.max(...validValues);
    const range = max - min;

    // Median
    let median = 0;
    if (sorted.length % 2 === 0) {
      median = (sorted[sorted.length / 2 - 1] + sorted[sorted.length / 2]) / 2;
    } else {
      median = sorted[Math.floor(sorted.length / 2)];
    }

    // Mode (most frequent)
    const freqMap = new Map();
    validValues.forEach(v => freqMap.set(v, (freqMap.get(v) || 0) + 1));
    let mode = validValues[0];
    let maxFreq = 1;
    freqMap.forEach((freq, val) => {
      if (freq > maxFreq) {
        maxFreq = freq;
        mode = val;
      }
    });

    // Variance and Standard Deviation
    const squareDiffs = validValues.map(v => Math.pow(v - average, 2));
    const variance = squareDiffs.reduce((a, b) => a + b, 0) / validValues.length;
    const stdDev = Math.sqrt(variance);

    this.stats = {
      count: validValues.length,
      sum: sum,
      average: parseFloat(average.toFixed(2)),
      median: parseFloat(median.toFixed(2)),
      mode: mode,
      min: min,
      max: max,
      range: range,
      variance: parseFloat(variance.toFixed(2)),
      stdDev: parseFloat(stdDev.toFixed(2)),
      sortedValues: sorted
    };
  }

  onValueChange() {
    this.calculateStatistics();
  }

  getStartAngle(index: number): number {
    let angle = 0;
    for (let i = 0; i < index; i++) {
      const percentage = this.stats.sum > 0 ? (this.values[i] / this.stats.sum) * 100 : 0;
      angle += (percentage / 100) * 360;
    }
    return angle;
  }

  getPieColor(index: number): string {
    const colors = ['#667eea', '#764ba2', '#f093fb', '#4facfe', '#00f2fe', '#43e97b'];
    return colors[index % colors.length];
  }
}
