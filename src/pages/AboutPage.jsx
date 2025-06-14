import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-950 via-purple-900 to-purple-800 relative overflow-hidden text-white p-6 animate-gradient-x">

      {/* Floating deco */}
      <div className="absolute w-48 h-48 bg-purple-500/20 rounded-full blur-3xl animate-float top-10 left-10"></div>
      <div className="absolute w-36 h-36 bg-fuchsia-400/30 rounded-full blur-2xl animate-float bottom-20 right-20"></div>

      <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-10 max-w-4xl z-10 animate-fade-in-up">
        <h1 className="text-4xl font-bold mb-6 text-center text-purple-200">About Our Fest</h1>
        <p className="text-lg leading-relaxed text-purple-100">
          Welcome to <span className="text-fuchsia-400 font-semibold">[Your Fest Name]</span>, the ultimate celebration of creativity, culture, and connection! 🎉
          <br /><br />
          Hosted by <span className="text-fuchsia-400">[Your College Name]</span>, our fest brings together students from all disciplines to showcase talent, compete in exciting events, and vibe to the beats of unforgettable performances.
          <br /><br />
          Whether you’re here to dance, code, sing, game, debate, or just soak in the madness—we've got something for everyone. This app is your one-stop portal to explore events, register, and stay updated.
          <br /><br />
          Join us. Be the vibe. Make memories. 💜
        </p>
      </div>
    </div>
  );
};

export default About;
