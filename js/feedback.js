    function submitFeedback() {
      const comment = document.getElementById('comment').value.trim();
      if (!comment) { alert('Please write a comment before submitting.'); return; }
      document.getElementById('feedbackSuccess').style.display = 'block';
      document.getElementById('comment').value  = '';
      document.getElementById('category').value = '';
      document.querySelectorAll('.star-rating input').forEach(r => r.checked = false);
    }
