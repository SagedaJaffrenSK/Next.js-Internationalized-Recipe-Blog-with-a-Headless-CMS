import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.includes('@')) {
      setStatus('error');
    } else {
      setStatus('success');
    }
  };

  if (status === 'success') {
    return <p data-testid="newsletter-success" className="p-4">Thank you for subscribing!</p>;
  }

  return (
    <form data-testid="newsletter-form" onSubmit={handleSubmit} className="p-4 border mt-4">
      <input 
        data-testid="newsletter-email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        placeholder="Email" 
        className="border p-2 mr-2"
      />
      <button data-testid="newsletter-submit" type="submit" className="bg-blue-500 text-white p-2">Join</button>
      {status === 'error' && <p data-testid="newsletter-error" className="text-red-500">Invalid email address.</p>}
    </form>
  );
}