// Initialize Lucide icons
document.addEventListener('DOMContentLoaded', function() {
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
    
    // Initialize spotlight effect
    const spotlight = document.getElementById('spotlight');
    if (spotlight) {
        window.addEventListener('mousemove', e => {
            spotlight.style.setProperty('--x', e.clientX + 'px');
            spotlight.style.setProperty('--y', e.clientY + 'px');
        });
    }
});

// Navigation function
function navigateTo(page) {
    window.location.href = page;
}

// Auth modal functions
function toggleAuth() {
    const modal = document.getElementById('auth-modal');
    if (modal) {
        modal.classList.toggle('hidden');
    }
}

function switchAuth() {
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    if (loginForm && signupForm) {
        loginForm.classList.toggle('hidden');
        signupForm.classList.toggle('hidden');
    }
}

function handleAuth(type) {
    if (type === 'login') {
        // Handle login logic
        console.log('Login attempted');
        toggleAuth();
    } else if (type === 'register') {
        // Handle registration logic
        console.log('Registration attempted');
        toggleAuth();
    }
}

// Store analysis data for report download
let currentAnalysisData = null;

// File upload handler
function handleFileUpload(event) {
    const file = event.target.files[0];
    const fileName = document.getElementById('file-name');
    
    if (file) {
        fileName.textContent = file.name;
        fileName.classList.remove('text-gray-400');
        fileName.classList.add('text-teal-400', 'font-medium');
        
        // Here you would typically parse the file and extract data
        // For now, we'll just show the file name
        console.log('File uploaded:', file.name);
        
        // You can add file parsing logic here (e.g., using Papa Parse for CSV)
    } else {
        fileName.textContent = 'Choose file or drag & drop';
        fileName.classList.remove('text-teal-400', 'font-medium');
        fileName.classList.add('text-gray-400');
    }
    
    // Reinitialize icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

// Generate care and precautions based on analysis
function generateCarePrecautions(score, disease, status) {
    const careSection = document.getElementById('care-precautions-section');
    const careContent = document.getElementById('care-content');
    
    if (!careSection || !careContent) return;
    
    let precautions = [];
    
    // General precautions based on disease type
    const diseasePrecautions = {
        'Cardiovascular': [
            { icon: 'heart-pulse', color: 'text-red-400', title: 'Heart Health', desc: 'Monitor heart rate regularly. Avoid excessive physical exertion. Maintain a low-sodium diet.' },
            { icon: 'activity', color: 'text-orange-400', title: 'Blood Pressure Monitoring', desc: 'Check blood pressure twice daily. Keep a log of readings. Report any sudden changes.' },
            { icon: 'utensils-crossed', color: 'text-green-400', title: 'Dietary Guidelines', desc: 'Follow a heart-healthy diet rich in fruits, vegetables, and whole grains. Limit saturated fats.' }
        ],
        'Diabetes': [
            { icon: 'syringe', color: 'text-blue-400', title: 'Blood Sugar Management', desc: 'Monitor blood glucose levels as prescribed. Take medications on schedule. Keep emergency glucose supplies.' },
            { icon: 'footprints', color: 'text-purple-400', title: 'Foot Care', desc: 'Inspect feet daily for cuts, blisters, or sores. Wear comfortable, well-fitting shoes. Maintain good hygiene.' },
            { icon: 'apple', color: 'text-green-400', title: 'Nutrition Plan', desc: 'Follow a balanced meal plan. Monitor carbohydrate intake. Stay hydrated with water.' }
        ],
        'Respiratory': [
            { icon: 'wind', color: 'text-cyan-400', title: 'Air Quality', desc: 'Avoid smoke, dust, and pollutants. Use air purifiers if needed. Keep windows closed during high pollution days.' },
            { icon: 'lungs', color: 'text-teal-400', title: 'Breathing Exercises', desc: 'Practice deep breathing exercises daily. Use prescribed inhalers correctly. Monitor oxygen levels if recommended.' },
            { icon: 'shield-check', color: 'text-yellow-400', title: 'Infection Prevention', desc: 'Get annual flu and pneumonia vaccines. Wash hands frequently. Avoid crowded places during flu season.' }
        ],
        'Renal': [
            { icon: 'droplet', color: 'text-blue-400', title: 'Fluid Management', desc: 'Monitor fluid intake as per doctor\'s recommendation. Track daily weight. Report swelling or fluid retention.' },
            { icon: 'scale', color: 'text-purple-400', title: 'Dietary Restrictions', desc: 'Limit protein, sodium, potassium, and phosphorus as advised. Follow renal diet plan strictly.' },
            { icon: 'pill', color: 'text-orange-400', title: 'Medication Compliance', desc: 'Take all medications as prescribed. Avoid NSAIDs unless approved by doctor. Regular lab tests are essential.' }
        ]
    };
    
    // Get disease-specific precautions
    precautions = diseasePrecautions[disease] || diseasePrecautions['Cardiovascular'];
    
    // Add risk-level specific precautions
    if (score > 50) {
        precautions.push(
            { icon: 'calendar-check', color: 'text-teal-400', title: 'Regular Follow-ups', desc: 'Schedule appointments every 2-4 weeks. Don\'t skip check-ups. Keep all medical appointments.' },
            { icon: 'phone-call', color: 'text-red-400', title: 'Emergency Contacts', desc: 'Keep emergency numbers handy. Inform family members about your condition. Know when to seek immediate care.' }
        );
    } else {
        precautions.push(
            { icon: 'calendar-check', color: 'text-teal-400', title: 'Regular Follow-ups', desc: 'Schedule routine check-ups every 3-6 months. Maintain regular contact with healthcare provider.' },
            { icon: 'shield-check', color: 'text-green-400', title: 'Preventive Care', desc: 'Continue current treatment plan. Stay active within recommended limits. Maintain healthy lifestyle habits.' }
        );
    }
    
    // Generate HTML for precautions
    careContent.innerHTML = precautions.map(prec => `
        <div class="p-4 bg-white/5 rounded-2xl border border-white/10">
            <div class="flex items-start gap-3">
                <i data-lucide="${prec.icon}" class="w-5 h-5 ${prec.color} mt-0.5 flex-shrink-0"></i>
                <div>
                    <p class="font-bold text-sm mb-1">${prec.title}</p>
                    <p class="text-xs text-gray-400">${prec.desc}</p>
                </div>
            </div>
        </div>
    `).join('');
    
    // Show care section
    careSection.classList.remove('hidden');
    
    // Reinitialize icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

// Download report function
function downloadReport() {
    if (!currentAnalysisData) {
        alert('No analysis data available. Please run analysis first.');
        return;
    }
    
    const {
        score,
        status,
        disease,
        age,
        gender,
        bp,
        bmi,
        admissionStatus,
        timestamp
    } = currentAnalysisData;
    
    // Create report content
    const reportContent = `
CLINICAL RISK ASSESSMENT REPORT
Sanjeevani Healthcare Analytics Platform
Generated: ${timestamp}

═══════════════════════════════════════════════════════════

PATIENT INFORMATION
───────────────────────────────────────────────────────────
Primary Condition: ${disease}
Admission Status: ${admissionStatus}
Age: ${age} years
Gender: ${gender}

VITAL SIGNS
───────────────────────────────────────────────────────────
Systolic Blood Pressure: ${bp} mmHg
BMI Index: ${bmi}

CLINICAL RISK ASSESSMENT
───────────────────────────────────────────────────────────
Risk Score: ${score}%
Status: ${status}

AI INSIGHT
───────────────────────────────────────────────────────────
Patient displays ${status.toLowerCase()} metrics for ${disease}.

RECOMMENDATION
───────────────────────────────────────────────────────────
${score > 50 
    ? "Immediate physician notification recommended. Monitor vitals every 30 minutes. Follow-up within 24-48 hours."
    : "Continue standard post-discharge protocol. Next check-up in 7 days. Maintain current treatment plan."
}

CARE & PRECAUTIONS
───────────────────────────────────────────────────────────
${generateCarePrecautionsText(disease, score)}

═══════════════════════════════════════════════════════════

IMPORTANT NOTES
───────────────────────────────────────────────────────────
• This report is generated by AI and should be reviewed by a qualified healthcare professional.
• In case of emergency, contact your healthcare provider immediately.
• Do not make medical decisions based solely on this report.
• Keep this report for your medical records.

For questions or concerns, contact your healthcare provider.

═══════════════════════════════════════════════════════════
Report ID: ${Date.now()}
    `.trim();
    
    // Create blob and download
    const blob = new Blob([reportContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Clinical_Report_${disease.replace(/\s+/g, '_')}_${Date.now()}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
}

// Generate care precautions text for report
function generateCarePrecautionsText(disease, score) {
    const careTexts = {
        'Cardiovascular': [
            '• Monitor heart rate regularly and avoid excessive physical exertion',
            '• Check blood pressure twice daily and maintain a log',
            '• Follow a heart-healthy diet rich in fruits, vegetables, and whole grains',
            '• Limit sodium and saturated fat intake',
            '• Take medications as prescribed and report any side effects'
        ],
        'Diabetes': [
            '• Monitor blood glucose levels as prescribed by your healthcare provider',
            '• Take medications on schedule and keep emergency glucose supplies',
            '• Inspect feet daily for cuts, blisters, or sores',
            '• Follow a balanced meal plan and monitor carbohydrate intake',
            '• Stay hydrated and maintain regular exercise routine'
        ],
        'Respiratory': [
            '• Avoid smoke, dust, and pollutants; use air purifiers if needed',
            '• Practice deep breathing exercises daily',
            '• Use prescribed inhalers correctly and monitor oxygen levels',
            '• Get annual flu and pneumonia vaccines',
            '• Avoid crowded places during flu season'
        ],
        'Renal': [
            '• Monitor fluid intake as per doctor\'s recommendation',
            '• Track daily weight and report swelling or fluid retention',
            '• Limit protein, sodium, potassium, and phosphorus as advised',
            '• Take all medications as prescribed',
            '• Attend regular lab tests and follow-up appointments'
        ]
    };
    
    const precautions = careTexts[disease] || careTexts['Cardiovascular'];
    
    if (score > 50) {
        precautions.push('• Schedule appointments every 2-4 weeks');
        precautions.push('• Keep emergency numbers handy and know when to seek immediate care');
    } else {
        precautions.push('• Schedule routine check-ups every 3-6 months');
        precautions.push('• Maintain healthy lifestyle habits and stay active within recommended limits');
    }
    
    return precautions.join('\n');
}

// Analysis function for predict page
function runAnalysis() {
    const btn = document.getElementById('analyze-btn');
    const res = document.getElementById('result-box');
    const suggestionsBox = document.getElementById('high-risk-suggestions');
    const downloadBtn = document.getElementById('download-btn');
    if (!btn || !res) return;
    
    const diseaseType = document.getElementById('disease-type');
    const admissionStatus = document.getElementById('admission-status');
    const patientAge = document.getElementById('patient-age');
    const patientGender = document.getElementById('patient-gender');
    const bpVal = parseInt(document.getElementById('bp-val').innerText);
    const bmiVal = parseInt(document.getElementById('bmi-val').innerText);
    
    const disease = diseaseType ? diseaseType.value : 'Unknown';
    const age = patientAge ? patientAge.value || 'N/A' : 'N/A';
    const gender = patientGender ? patientGender.value : 'N/A';
    const admStatus = admissionStatus ? admissionStatus.value : 'N/A';

    btn.innerHTML = `Synthesizing Data... <i data-lucide="refresh-cw" class="w-5 h-5 animate-spin"></i>`;
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // Hide suggestions and care section initially
    if (suggestionsBox) {
        suggestionsBox.classList.add('hidden');
    }
    const careSection = document.getElementById('care-precautions-section');
    if (careSection) {
        careSection.classList.add('hidden');
    }
    
    // Hide download button initially
    if (downloadBtn) {
        downloadBtn.classList.add('hidden');
    }

    setTimeout(() => {
        // Mock Logic: Higher BP = Higher Risk
        let score = bpVal > 150 ? Math.floor(Math.random() * 20) + 65 : Math.floor(Math.random() * 25) + 5;
        let status = score > 50 ? "High Risk" : "Stable";
        let color = score > 50 ? "text-red-400" : "text-teal-400";
        let isHighRisk = score > 80;

        res.innerHTML = `
            <div class="animate-in fade-in duration-500">
                <div class="text-7xl font-black ${color} mb-2">${score}%</div>
                <p class="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-8">Clinical Risk Index</p>
                <div class="text-left space-y-4">
                    <div class="p-4 bg-white/5 border border-white/10 rounded-2xl">
                        <p class="text-teal-400 font-bold text-[10px] uppercase mb-1">AI Insight</p>
                        <p class="text-gray-300 text-xs">Patient displays ${status} metrics for ${disease}.</p>
                    </div>
                    <div class="p-4 bg-white/5 border border-white/10 rounded-2xl">
                        <p class="text-teal-400 font-bold text-[10px] uppercase mb-1">Recommendation</p>
                        <p class="text-gray-400 text-[11px] leading-relaxed">
                            ${score > 50 ? "Immediate physician notification recommended. Monitor vitals every 30 minutes." : "Continue standard post-discharge protocol. Next check-up in 7 days."}
                        </p>
                    </div>
                </div>
            </div>
        `;
        
        // Store analysis data for report download
        currentAnalysisData = {
            score,
            status,
            disease,
            age,
            gender,
            bp: bpVal,
            bmi: bmiVal,
            admissionStatus: admStatus,
            timestamp: new Date().toLocaleString()
        };
        
        // Show high-risk suggestions if risk is above 80%
        if (isHighRisk && suggestionsBox) {
            suggestionsBox.classList.remove('hidden');
        } else if (suggestionsBox) {
            suggestionsBox.classList.add('hidden');
        }
        
        // Generate and show care & precautions for all predictions
        generateCarePrecautions(score, disease, status);
        
        // Show download button
        if (downloadBtn) {
            downloadBtn.classList.remove('hidden');
        }
        
        btn.innerHTML = `Analyze & Generate Report <i data-lucide="file-text" class="w-5 h-5"></i>`;
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    }, 2000);
}

// Language dropdown functions
function toggleLanguageMenu() {
    const menu = document.getElementById('language-menu');
    if (menu) {
        menu.classList.toggle('hidden');
    }
}

function changeLanguage(langCode, langName) {
    const currentLang = document.getElementById('current-lang');
    if (currentLang) {
        currentLang.textContent = langName;
    }
    
    // Close the dropdown
    const menu = document.getElementById('language-menu');
    if (menu) {
        menu.classList.add('hidden');
    }
    
    // Store language preference
    localStorage.setItem('preferred-language', langCode);
    
    // Here you would implement actual translation logic
    // For now, we'll just update the display
    console.log('Language changed to:', langCode);
    
    // Reinitialize icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

// Close language menu when clicking outside
document.addEventListener('click', function(event) {
    const langMenu = document.getElementById('language-menu');
    const langButton = event.target.closest('[onclick="toggleLanguageMenu()"]');
    
    if (langMenu && !langMenu.contains(event.target) && !langButton) {
        langMenu.classList.add('hidden');
    }
});

// Load saved language preference on page load
document.addEventListener('DOMContentLoaded', function() {
    const savedLang = localStorage.getItem('preferred-language');
    if (savedLang) {
        const langMap = {
            'en': 'English',
            'hi': 'हिंदी',
            'es': 'Español',
            'fr': 'Français',
            'de': 'Deutsch',
            'zh': '中文'
        };
        const langName = langMap[savedLang] || 'English';
        const currentLang = document.getElementById('current-lang');
        if (currentLang) {
            currentLang.textContent = langName;
        }
    }
});

// Dashboard functions
function initChart() {
    const canvas = document.getElementById('dashboardChart');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (window.myChart) window.myChart.destroy();
    
    if (typeof Chart !== 'undefined') {
        window.myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
                datasets: [{
                    label: 'Average Patient Risk Score',
                    data: [42, 35, 28, 15],
                    borderColor: '#2dd4bf',
                    backgroundColor: 'rgba(45, 212, 191, 0.1)',
                    fill: true,
                    tension: 0.4
                }]
            },
            options: {
                responsive: true,
                plugins: { legend: { display: false } },
                scales: { y: { grid: { color: 'rgba(255,255,255,0.05)' } } }
            }
        });
    }
}

function selectPatient(name, element) {
    // Update patient selection
    document.querySelectorAll('.patient-item').forEach(item => {
        item.classList.remove('bg-white/5');
    });
    if (element) {
        element.classList.add('bg-white/5');
    }
    
    // Update dashboard metrics based on patient
    const patients = {
        'Sarah': { risk: 12, hr: 72, bp: '128/82', bmi: 24.5 },
        'Michael': { risk: 45, hr: 85, bp: '145/95', bmi: 28.2 },
        'Robert': { risk: 72, hr: 95, bp: '160/100', bmi: 30.1 }
    };
    
    const patient = patients[name];
    if (patient) {
        const riskEl = document.getElementById('dash-risk');
        if (riskEl) {
            riskEl.textContent = patient.risk + '%';
        }
    }
    
    // Reinitialize chart
    initChart();
}

// Initialize chart when dashboard page loads
document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('dashboardChart')) {
        initChart();
    }
});
