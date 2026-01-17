import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-page1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './page1.html',
  styleUrl: './page1.scss',
})
export class Page1 implements OnInit {
  currentLanguage: string = 'en';
  t: any;

  translations = {
    en: {
      heroTitle: 'Welcome to TechVision',
      heroSubtitle: 'Innovating the Future, One Solution at a Time',
      aboutTitle: 'About Us',
      aboutText: 'TechVision is a forward-thinking technology company dedicated to delivering cutting-edge solutions that transform businesses and empower organizations. Since our founding, we\'ve been committed to excellence, innovation, and customer satisfaction. We specialize in cloud infrastructure, artificial intelligence, and enterprise software solutions that help companies scale and succeed in the digital age.',
      whatWeDoTitle: 'What We Do',
      cloudSolutions: 'Cloud Solutions - Scalable and secure cloud infrastructure for businesses of all sizes',
      aiMl: 'AI & Machine Learning - Intelligent automation and data-driven insights',
      enterpriseSoftware: 'Enterprise Software - Custom-built applications tailored to your needs',
      digitalTransformation: 'Digital Transformation - Modernizing legacy systems for the future',
      consultingServices: 'Consulting Services - Strategic guidance from industry experts',
      leadershipTitle: 'Our Leadership Team',
      james: 'James Mitchell',
      ceo: 'Chief Executive Officer',
      jamesDesc: 'Visionary leader with 20+ years in tech industry',
      sarah: 'Sarah Johnson',
      cto: 'Chief Technology Officer',
      sarahDesc: 'Cloud architecture and AI innovation specialist',
      michael: 'Michael Chen',
      vp: 'VP of Product',
      michaelDesc: 'Product strategy and customer success advocate',
      address: 'Address',
      email: 'Email',
      telephone: 'Telephone',
      vatNumber: 'VAT Number',
      requestOfferTitle: 'Request a Business Offer',
      companyInfo: 'Company Information',
      yourEmail: 'Your Email Address',
      yourRequest: 'Your Request',
      sendRequest: 'Send Request',
      requestPlaceholder: 'Describe your business needs and what solutions you\'re looking for...',
      requestFormTitle: 'Request Offer',
      characters: 'characters',
    }
  };


  ngOnInit() {
    // Automatically initialize with English language
    this.t = this.translations.en;  
  }

  @HostListener('input', ['$event'])
  onCharCountChange(event: Event) {
    const textarea = event.target as HTMLTextAreaElement;
    if (textarea && textarea.id === 'request') {
      const charCount = document.getElementById('charCount');
      if (charCount) {
        charCount.textContent = textarea.value.length.toString();
      }
    }
  }
}
