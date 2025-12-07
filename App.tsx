import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Button from './components/Button';
import TextInput from './components/TextInput';

/**
 * The main application component for the Elite Battleground Like Boost.
 * It manages Player ID input and displays a client-side generated
 * confirmation message with a game-like UI.
 */
const App: React.FC = () => {
  const [playerID, setPlayerID] = useState<string>('');
  const [playerIDError, setPlayerIDError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [confirmationMessage, setConfirmationMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  /**
   * Handles the submission of the like boost form.
   * Validates the Player ID and generates a client-side confirmation message.
   */
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setPlayerIDError('');
    setError(null);
    setConfirmationMessage(null);

    // Basic Player ID validation: Must be a number and between 5-15 digits long
    if (!playerID.trim() || !/^\d+$/.test(playerID.trim())) {
      setPlayerIDError('Player ID must be a valid number.');
      return;
    }
    if (playerID.trim().length < 5 || playerID.trim().length > 15) {
      setPlayerIDError('Player ID must be between 5 and 15 digits long.');
      return;
    }

    setLoading(true);
    // Simulate an asynchronous operation for better user experience
    await new Promise(resolve => setTimeout(resolve, 1500)); 

    try {
      const generatedMessage = `🎉 Congratulations, Player ID ${playerID}! Your profile is getting a FREE 100 Likes Boost! Get ready for some extra attention! ✨`;
      setConfirmationMessage(generatedMessage);
    } catch (e: any) {
      // This catch block is for potential client-side errors, not API errors.
      console.error('Client-side error during message generation:', e);
      setError('An unexpected error occurred while processing your request.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-between bg-gradient-to-br from-gray-900 via-gray-950 to-black p-4 md:p-8">
      <Header />

      <main className="flex-grow flex flex-col items-center justify-center w-full max-w-md mx-auto py-8">
        <section className="bg-gray-800 bg-opacity-80 backdrop-blur-sm p-6 sm:p-8 rounded-xl shadow-2xl border-2 border-red-700 w-full animate-fade-in">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-red-400 mb-6 drop-shadow-md">
            Free 100 Likes Boost!
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <TextInput
              id="playerID"
              name="playerID"
              type="text"
              label="Player ID"
              placeholder="Enter your Player ID (e.g., 123456789)"
              value={playerID}
              onChange={(e) => setPlayerID(e.target.value)}
              error={playerIDError}
            />

            <Button
              onClick={() => {}} // No-op as it's a submit button
              type="submit"
              loading={loading}
              disabled={loading}
              className="w-full"
            >
              {loading ? 'Processing...' : 'Boost My Likes!'}
            </Button>
          </form>

          {error && (
            <div className="bg-red-900 bg-opacity-50 border border-red-700 text-red-200 p-4 rounded-lg mt-6 text-center text-sm sm:text-base animate-pulse-slight">
              Error: {error}
            </div>
          )}

          {confirmationMessage && (
            <div className="bg-green-900 bg-opacity-50 border border-green-700 text-green-200 p-4 rounded-lg mt-6 text-center text-sm sm:text-base animate-bounce-in">
              <h3 className="font-bold text-lg mb-2">Confirmation:</h3>
              <p className="whitespace-pre-wrap">{confirmationMessage}</p>
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;