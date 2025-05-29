function handleConversion() {
  const mode = document.getElementById('conversionMode').value;
  const input = document.getElementById('inputValue').value.trim();
  const resultDiv = document.getElementById('result');
  const errorDiv = document.getElementById('error');

  resultDiv.textContent = '';
  errorDiv.textContent = '';

  try {
    if (mode === 'intToRoman') {
      const num = parseInt(input, 10);
      if (isNaN(num)) {
        throw new Error('Please enter a valid integer number.');
      }
      const roman = integerToRoman(num);
      resultDiv.textContent = `Roman Numeral: ${roman}`;

      // ✅ Evento GA: conversión exitosa de número a romano
      gtag('event', 'conversion_success', {
        'event_category': 'Roman Converter',
        'event_label': `intToRoman - ${input}`,
        'value': num
      });

    } else if (mode === 'romanToInt') {
      const num = romanToInteger(input);
      resultDiv.textContent = `Integer: ${num}`;

      // ✅ Evento GA: conversión exitosa de romano a número
      gtag('event', 'conversion_success', {
        'event_category': 'Roman Converter',
        'event_label': `romanToInt - ${input}`,
        'value': num
      });
    }
  } catch (error) {
    errorDiv.textContent = error.message;

    // ❌ Evento GA: entrada inválida
    gtag('event', 'invalid_input', {
      'event_category': 'Roman Converter',
      'event_label': `${mode} - ${input}`,
      'value': 0
    });
  }
}
