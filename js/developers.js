document.addEventListener('DOMContentLoaded', function() {
    // API Tabs Functionality
    const apiTabs = document.querySelectorAll('.api-tab');
    const apiContentItems = document.querySelectorAll('.api-content-item');
    
    apiTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove active class from all tabs
            apiTabs.forEach(t => t.classList.remove('active'));
            
            // Add active class to clicked tab
            this.classList.add('active');
            
            // Hide all content items
            apiContentItems.forEach(item => item.classList.remove('active'));
            
            // Show the corresponding content item
            const tabTarget = this.getAttribute('data-tab');
            document.getElementById(`${tabTarget}-api`).classList.add('active');
        });
    });
    
    // Syntax highlighting effect for code blocks
    const codeBlocks = document.querySelectorAll('.code-block code');
    
    codeBlocks.forEach(block => {
        // This is a simple syntax highlighting simulation
        // In a real project, you might want to use a library like Prism.js or highlight.js
        const content = block.innerHTML;
        let highlighted = content
            // Highlight JSON keys
            .replace(/(".*?")\s*:/g, '<span style="color: #e74c3c;">$1</span>:')
            // Highlight values
            .replace(/:\s*".*?"/g, match => {
                return match.replace(/:"(.*?)"/, ': <span style="color: #27ae60;">"$1"</span>');
            })
            // Highlight numbers
            .replace(/:\s*(\d+\.?\d*)/g, ': <span style="color: #3498db;">$1</span>')
            // Highlight booleans
            .replace(/:\s*(true|false)/g, ': <span style="color: #9b59b6;">$1</span>')
            // Highlight null
            .replace(/:\s*(null)/g, ': <span style="color: #7f8c8d;">$1</span>')
            // Highlight comments
            .replace(/(\/\/.*)/g, '<span style="color: #7f8c8d;">$1</span>');
            
        block.innerHTML = highlighted;
    });
    
    // Smooth scroll for anchor links within the page
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            if (this.getAttribute('href') !== '#') {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    // Offset for fixed header
                    const headerHeight = document.querySelector('.site-header').offsetHeight;
                    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight - 20;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});