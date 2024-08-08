import React from "react";

const About = () => {
  return (
    <>
      <div className="container my-4">
        <div className="card displayContent shadow p-3 mb-5 bg-white rounded">
          <h2>Getting Started</h2>
          <ul>
            <li>
              <b>Registered User:</b> Sign up for a FREE account so you can save your notes
              as private notes and log back in from anywhere to edit them.
            </li>
          </ul>

          <h2>Why use iNoteVault? Here are some ideas</h2>
          <ul>
            <li>Write your personal / proffesional notes</li>
            <li>Save notes and access it from any location at any time</li>
            <li>Edit or Delete your notes</li>
            <li>Give your notes a relevant tag</li>
            <li>Maintaine privacy using credentials</li>
            <li>Use it as a daily diary to record each day's events</li>
            <li>Store shopping list</li>
          </ul>

          <h2>More on How To Use iNoteVault - Your Secure, Free Online Notepad</h2>
          <p>
            iNoteVault.com is an online text editor that gives web user a simple tool to take notes online.
            User notes are saved through a secure internet connection to our cloud servers. iNoteVault is free and
            can be accessed from anywhere at any time.
          </p>
          <p>
            If you have any questions or any other ideas on improving iNoteVault, please send an email at <a href="mailto:support@iNoteVault.com">support@iNoteVault.com</a>.
            We'd love to hear from you!
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
