# Wireframe Prompt for Sanjeevani Healthcare Analytics Platform

## Project Overview
Create comprehensive wireframes for **Sanjeevani**, an AI-powered healthcare analytics platform that predicts health risks with 94.5% accuracy. The platform serves hospitals and healthcare providers to monitor and predict patient health conditions using machine learning.

## Design Style
- **Aesthetic**: Modern glassmorphism design with dark theme
- **Color Scheme**: Teal (#14b8a6) as primary accent, dark backgrounds with glassmorphic elements
- **Typography**: Bold headings, clean sans-serif fonts
- **UI Elements**: Rounded corners (32px-40px radius), subtle borders, backdrop blur effects
- **Responsive**: Mobile-first approach, breakpoints at 768px (tablet) and 1024px (desktop)

---

## Page 1: Home Page (Landing Page)

### Header/Navigation Bar
- **Fixed position** at top
- **Left**: Logo with activity icon + "Sanjeevani" text
- **Center**: Navigation links (Home, Features, Predict, Dashboard, About Us)
- **Right**: 
  - **Language Dropdown** (with globe/languages icon):
    - Button shows current language (default: "English")
    - Dropdown menu with options:
      - 🇺🇸 English
      - 🇮🇳 हिंदी (Hindi)
      - 🇪🇸 Español (Spanish)
      - 🇫🇷 Français (French)
      - 🇩🇪 Deutsch (German)
      - 🇨🇳 中文 (Chinese)
    - Glassmorphic dropdown panel
  - "Get Started" button (teal background)
- **Glassmorphic background** with backdrop blur

### Hero Section
- **Left Column (60% width)**:
  - Badge: "AI-Powered Healthcare Analytics" (teal accent)
  - Main headline: "Predict Health Risks Before They Occur" (large, bold)
  - Subheadline with gradient text: "Before They Occur"
  - Description paragraph: "Our advanced machine learning model analyzes patient data..."
  - **Stats Row**: 
    - "94.5%" (large, teal) + "Accuracy" (small label)
    - "50K+" (large) + "Patients" (small label)
  - CTA Button: "Start Risk Assessment →" (teal background, large)

- **Right Column (40% width)**:
  - Hero image (healthcare/medical theme)
  - **Overlay Cards** (glassmorphic):
    - Top-right: "Risk: Low - 12%" (green accent, animated)
    - Bottom-left: "Risk: High - 77%" (red accent, animated)

### Footer
- Simple footer with copyright and links (optional)

---

## Page 2: Features Page

### Header/Navigation
- Same as Home Page

### Main Content
- **Page Title**: "Powerful Features" (centered, large)
- **4-Column Grid** (responsive: 1 col mobile, 2 col tablet, 4 col desktop):
  
  **Card 1: AI Predictions**
  - Icon: Brain icon (teal background circle)
  - Title: "AI Predictions"
  - Description: "Advanced ML algorithms predict risks with 94.5% accuracy."
  
  **Card 2: Real-time Monitoring**
  - Icon: Activity icon (red background circle)
  - Title: "Real-time Monitoring"
  - Description: "Continuous tracking with instant alerts for abnormalities."
  
  **Card 3: Interactive Analytics**
  - Icon: Line chart icon (green background circle)
  - Title: "Interactive Analytics"
  - Description: "Beautiful dashboards transforming complex data into insights."
  
  **Card 4: HIPAA Compliant**
  - Icon: Shield check icon (yellow background circle)
  - Title: "HIPAA Compliant"
  - Description: "Enterprise-grade security ensuring data privacy."

- Each card: Glassmorphic background, rounded corners, hover effects

---

## Page 3: Predict Page (Clinical Risk Assessment)

### Header/Navigation
- Same as Home Page

### Main Content
- **Page Title**: "Clinical Risk Assessment" (centered)
- **Subtitle**: "Comprehensive monitoring for hospitalized and discharged patients."

- **2-Column Layout** (70% left, 30% right on desktop):

  **Left Column: Input Form**
  - **Row 1**: 
    - Dropdown: "Primary Condition" (Cardiovascular, Diabetes, Respiratory, Renal)
    - Dropdown: "Admission Status" (Recently Discharged, Current Inpatient, Outpatient)
  
  - **Row 2**:
    - Input: "Patient Age" (number field)
    - Dropdown: "Gender" (Male, Female)
  
  - **Row 3**: 
    - Slider: "Systolic Blood Pressure" (80-220 mmHg, shows current value)
    - Slider: "BMI Index" (15-45, shows current value)
  
  - **Row 4**:
    - Slider: "Post-Discharge Monitoring Frequency" (Weekly, Daily, 6 Hours, Hourly)
    - Labels below slider
  
  - **Submit Button**: "Analyze & Generate Report" (full width, teal, large, with icon)

  **Right Column: Results Panel**
  - Initially shows placeholder:
    - Large icon (clipboard)
    - Text: "Provide patient EHR data and vitals to generate a clinical AI report."
  - After submission: Shows risk assessment results:
    - Large risk percentage (color-coded: teal for low, red for high)
    - "Clinical Risk Index" label
    - AI Insight card
    - Recommendation card
  
  **High-Risk Suggestions Panel** (appears below results when risk > 80%):
  - **Alert Header**:
    - Warning icon (red)
    - "High Risk Detected" title
    - "Immediate action recommended" subtitle
  - **6 Suggestion Cards** (stacked vertically):
    1. **Contact Healthcare Provider** (red icon)
       - Notify physician immediately
    2. **Continuous Monitoring** (orange icon)
       - Hourly vital sign monitoring instructions
    3. **Consider Hospitalization** (yellow icon)
       - Evaluate need for inpatient care
    4. **Medication Review** (blue icon)
       - Review current medications
    5. **Lifestyle Modifications** (purple icon)
       - Immediate dietary and activity changes
    6. **Follow-up Schedule** (teal icon)
       - Schedule appointment within 24-48 hours
  - **Emergency Notice** (red background):
    - Warning about emergency symptoms
    - Call emergency services if needed
  - Glassmorphic container with red accent border
  - Animated fade-in when displayed

---

## Page 4: Dashboard Page (Real-time Health Analytics)

### Header/Navigation
- Same as Home Page

### Main Content
- **Page Title**: "Real-time Health Analytics" (centered)
- **Badge**: "Interactive Dashboard"

- **2-Column Layout** (25% left sidebar, 75% main content):

  **Left Sidebar: Patient List**
  - Header: "Patients" (with users icon)
  - **Scrollable list** of patient cards:
    - **Patient Card 1**: 
      - Name: "Sarah Johnson"
      - Details: "Age 45 • Diabetes"
      - Risk badge: "12%" (teal, low risk)
    - **Patient Card 2**:
      - Name: "Michael Chen"
      - Details: "Age 62 • Hypertension"
      - Risk badge: "45%" (yellow, medium risk)
    - **Patient Card 3**:
      - Name: "Robert Davis"
      - Details: "Age 55 • Stroke"
      - Risk badge: "72%" (red, high risk)
  - Cards are clickable, selected state highlighted

  **Main Content Area**:
  - **Top Row: 4 Metric Cards** (grid, equal width):
    - **Card 1**: Risk Score
      - Icon: Activity (teal)
      - Large number: "12%"
      - Label: "Risk Score"
      - Trend indicator: "-8%" (red)
    
    - **Card 2**: Heart Rate
      - Icon: Heart (green)
      - Large number: "72 bpm"
      - Label: "Heart Rate"
      - Trend indicator: "+2" (teal)
    
    - **Card 3**: Blood Pressure
      - Icon: Droplet (orange)
      - Large number: "128/82"
      - Label: "Blood Pressure"
      - Trend indicator: "+5" (red)
    
    - **Card 4**: BMI Index
      - Icon: Scale (blue)
      - Large number: "24.5"
      - Label: "BMI Index"
      - Trend indicator: "-0.5" (teal)

  - **Middle Section: Chart**
    - Title: "Risk Score Trend"
    - Status badge: "Improving" (green)
    - Line chart showing risk score over time
    - Full width, glassmorphic container

  - **Bottom Section: Recommendations** (3-column grid):
    - **Card 1**: Lifestyle Changes
      - Icon: Check circle (green)
      - Title: "Lifestyle Changes"
      - Description: "Increase daily activity by 30 minutes."
    
    - **Card 2**: Medication Review
      - Icon: Alert circle (orange)
      - Title: "Medication Review"
      - Description: "Schedule follow-up for BP dose."
    
    - **Card 3**: Next Checkup
      - Icon: Calendar (blue)
      - Title: "Next Checkup"
      - Description: "Recommended in 14 days."

---

## Page 5: About Us Page

### Header/Navigation
- Same as Home Page

### Main Content
- **Page Title**: "The Minds Behind Sanjeevani" (centered)
- **Subtitle**: Description about CSE Diploma students Class of 2026

- **Team Grid**: 4-column layout (responsive: 1 col mobile, 2 col tablet, 4 col desktop)

  **Team Member Card 1: Sarvesh Devarmani**
  - Large circular icon placeholder (teal accent)
  - Name: "Sarvesh Devarmani"
  - Role badge: "Lead Developer" (teal)
  - Description paragraph
  - Social links: GitHub, LinkedIn icons

  **Team Member Card 2: Indrajeet Deshmukh**
  - Large circular icon placeholder (blue accent)
  - Name: "Indrajeet Deshmukh"
  - Role badge: "ML Engineer" (blue)
  - Description paragraph
  - Social links: GitHub, LinkedIn icons

  **Team Member Card 3: Sadiya Bairagdar**
  - Large circular icon placeholder (purple accent)
  - Name: "Sadiya Bairagdar"
  - Role badge: "UI/UX Designer" (purple)
  - Description paragraph
  - Social links: GitHub, LinkedIn icons

  **Team Member Card 4: Divya Ingale**
  - Large circular icon placeholder (emerald accent)
  - Name: "Divya Ingale"
  - Role badge: "Data Analyst" (emerald)
  - Description paragraph
  - Social links: GitHub, LinkedIn icons

- **Newsletter Section** (below team grid):
  - Glassmorphic container
  - Left: "Stay Updated" heading + description
  - Right: Email input field + "Subscribe" button (horizontal layout)

---

## Shared Components

### Authentication Modal (Overlay)
- **Full-screen overlay** with dark backdrop blur
- **Centered modal** (max-width: 500px):
  - Close button (X) in top-right
  - **Login Form** (default view):
    - Title: "Welcome Back" (with "Back" in teal)
    - Subtitle: "Access your clinical dashboard."
    - Input: "Hospital Email"
    - Input: "Password"
    - Button: "Sign In" (teal, full width)
    - Link: "Don't have an account? Register Hospital"
  
  - **Signup Form** (toggle view):
    - Title: "Register Team" (gradient text)
    - Subtitle: "Join the 2026 Sanjeevani Network."
    - Input: "Full Name"
    - Input: "Work Email"
    - Input: "Create Password"
    - Button: "Create Account" (teal, full width)
    - Link: "Already registered? Sign In"

---

## Interactive Elements & States

### Buttons
- **Primary CTA**: Teal background, black text, rounded corners, hover glow effect
- **Secondary**: Transparent with border, hover fill effect
- **Icon buttons**: Circular, icon-centered

### Cards
- Glassmorphic background (semi-transparent white on dark)
- Border: subtle white/10 opacity
- Hover: Border color change, slight scale/glow
- Rounded corners: 32px-40px

### Form Elements
- Inputs: Dark background (white/5), border (white/10), teal focus border
- Dropdowns: Same styling as inputs
- Sliders: Teal accent color, value display next to label

### Navigation
- Active state: Underline or highlight for current page
- Hover: Color change to teal

---

## Responsive Breakpoints

- **Mobile** (< 768px):
  - Single column layouts
  - Stacked navigation (hamburger menu)
  - Full-width cards
  - Vertical form layouts

- **Tablet** (768px - 1024px):
  - 2-column grids where applicable
  - Horizontal navigation visible
  - Side-by-side form fields

- **Desktop** (> 1024px):
  - Full multi-column layouts
  - Sidebar + main content
  - Maximum content width: 1400px

---

## Additional Notes

- **Spotlight effect**: Cursor-following spotlight overlay (optional decorative element)
- **Animations**: Subtle fade-in, zoom-in for modals
- **Icons**: Lucide icon library (activity, brain, heart, chart, shield, etc.)
- **Charts**: Chart.js for dashboard visualizations
- **Accessibility**: Ensure proper contrast ratios, keyboard navigation, ARIA labels

---

## Wireframe Deliverables

Please create wireframes for:
1. Home Page (Landing)
2. Features Page
3. Predict Page (Risk Assessment Form)
4. Dashboard Page (Analytics)
5. About Us Page
6. Authentication Modal (Login/Signup)

Include annotations for:
- Component spacing and sizing
- Interactive states (hover, active, selected)
- Responsive behavior notes
- Data flow and user interactions
