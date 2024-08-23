// import React from 'react'
import { useState } from "react";
// import ContactForm from "../components/contactform";
import Navbar from "../components/Navbar";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [subject, setSubject] = useState("");
  const [consent, setConsent] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(""); // Clear previous errors

    if (!name || !email || !message || !subject || !consent) {
      setError("All fields are required!");
      return;
    }
    try {
      const response = await fetch("https://formspree.io/f/xpwadley", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        const errorMessage = await response.text();
        setError(`Error: ${errorMessage}`);
      }
    } catch (error) {
      setError(`Error submitting form: ${error.message}`);
    }
  };

  return (
    <>
      <Navbar />
      <div
        className="grid grid-flow-row grid-cols-1 md:grid-cols-2 mx-4 md:mx-16 py-16"
        id="contact"
      >
        <div className="container h-auto px-4 md:px-10">
          <h1 className="text-4xl md:text-6xl text-white font-caveat font-semibold">
            Contact Shreya
          </h1>
          <hr className="w-10 my-8 flex justify-items-start border-cyen" />

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 tracking-wide text-base font-light"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-white text-md font-semibold mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className=" focus:shadow-outline border-none mt-1 block text-md placeholder-slate-400 focus:border-cyen focus:ring-1 focus:ring-cyen focus:ring-offset-0 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 shadow-sm appearance-none border rounded-md w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline  bg-cyan-400 bg-opacity-5 border-cyen "
                value={name}
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-white font-semibold mb-2 "
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block  text-md border-none placeholder-slate-400 focus:border-cyen focus:ring-1  focus:ring-cyen focus:ring-offset-0 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 shadow-sm appearance-none border rounded-md w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline  bg-cyan-400 bg-opacity-5 border-cyen "
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block text-white font-semibold mb-2"
              >
                Subject
              </label>
              <select
                id="subject"
                className="focus:shadow-outline  mt-1 block border-none text-md placeholder-slate-400 focus:border-cyen focus:ring-1 focus:ring-cyen focus:ring-offset-0
                disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                invalid:border-pink-500 invalid:text-pink-600
                focus:invalid:border-pink-500 focus:invalid:ring-pink-500 shadow-sm appearance-none border rounded-md w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline  bg-cyan-400 bg-opacity-5 border-cyen "
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              >
                <option value="" className="options">
                  Select a subject
                </option>
                <option value="general" className="options">
                  General Inquiry
                </option>
                <option value="support" className="options">
                  Support
                </option>
                <option value="feedback" className="options">
                  Feedback
                </option>
                <option value="collaboration" className="options">
                  Collaboration
                </option>
              </select>
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-white font-semibold mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                className="shadow appearance-none border-none rounded w-full py-2 px-3 text-md text-white leading-tight focus:outline-none focus:shadow-outline  bg-cyan-400 bg-opacity-5 border-cyen"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="consent"
                className="mr-2 leading-tight"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
              />
              <label htmlFor="consent" className="text-white">
                I agree to the terms and conditions
              </label>
            </div>
            <button
              type="submit"
              className={`px-4 py-1 text-md w-28 text-cyen font-semibold rounded-full border border-cyan-200 hover:text-white hover:bg-cyen hover:border-transparent focus:outline-none ${
                submitted
                  ? ''
                  : 'focus:ring-2 focus:ring-cyen focus:ring-offset-2 dark:ring-offset-zinc-900'
              } bg-cyan-500 bg-opacity-5`}
            >
              Submit
            </button>
          </form>
          {submitted && (
            <p className="text-green-500 mt-4 bg-green-500 bg-opacity-5 p-2">
              Your message has been sent !
            </p>
          )}
          {error && (
            <p className="text-red-400 mt-4 bg-red-500 bg-opacity-5 p-2">
              Invalid credientials !
            </p>
          )}
        </div>
        <div className="flex justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            data-name="Layer 1"
            width="643.16234"
            height="528"
            viewBox="0 0 643.16234 528"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            className="size-3/4"
          >
            <path
              d="M749.17736,620.67715a31.51714,31.51714,0,0,0,30.4345-5.36117c10.65986-8.94708,14.002-23.68733,16.72142-37.336l8.04348-40.37019L787.5369,549.205c-12.11023,8.33865-24.49328,16.94444-32.87836,29.02256s-12.04517,28.56585-5.308,41.63494"
              transform="translate(-278.41883 -186)"
              fill="#e6e6e6"
            />
            <path
              d="M750.61682,669.55367c-1.70442-12.415-3.457-24.98956-2.26145-37.53768,1.06179-11.14409,4.46168-22.02873,11.38342-30.95339a51.49158,51.49158,0,0,1,13.21089-11.97129c1.3211-.83387,2.537,1.25978,1.22167,2.09a48.95186,48.95186,0,0,0-19.363,23.36288c-4.21559,10.72234-4.89255,22.41059-4.1661,33.8008.43931,6.88809,1.37037,13.731,2.30861,20.5652a1.25406,1.25406,0,0,1-.84528,1.48875,1.21764,1.21764,0,0,1-1.48875-.84529Z"
              transform="translate(-278.41883 -186)"
              fill="#f2f2f2"
            />
            <path
              d="M767.03348,647.58491a23.20063,23.20063,0,0,0,20.2149,10.43338c10.23314-.48578,18.7643-7.62786,26.444-14.40842l22.7149-20.05553-15.0335-.71945c-10.8112-.51739-21.90132-1-32.19862,2.334s-19.794,11.35766-21.67692,22.01619"
              transform="translate(-278.41883 -186)"
              fill="#e6e6e6"
            />
            <path
              d="M745.8,676.6905c8.20362-14.51579,17.7191-30.64843,34.72168-35.80468a38.74561,38.74561,0,0,1,14.60449-1.50794c1.55057.1337,1.16338,2.52385-.38437,2.39039a35.99577,35.99577,0,0,0-23.30647,6.166c-6.57155,4.47307-11.68821,10.69183-16.01891,17.28653-2.65268,4.03945-5.02878,8.25028-7.40534,12.45545-.7595,1.34389-2.97945.3738-2.21108-.98579Z"
              transform="translate(-278.41883 -186)"
              fill="#f2f2f2"
            />
            <path
              d="M543.6065,574.714a62.11581,62.11581,0,0,1-59.982-10.5661c-21.00905-17.63341-27.596-46.68433-32.95552-73.584Q442.74266,450.78194,434.81638,411l33.189,22.85267c23.86752,16.43428,48.27274,33.39506,64.79853,57.19932s23.73932,56.29918,10.46133,82.0565"
              transform="translate(-278.41883 -186)"
              fill="#e6e6e6"
            />
            <path
              d="M540.76952,671.0426c3.35917-24.46828,6.81327-49.25085,4.457-73.98141-2.09263-21.96339-8.79332-43.41546-22.43508-61.00469a101.48234,101.48234,0,0,0-26.03679-23.5937c-2.60369-1.64344-5.00008,2.48285-2.40773,4.11913a96.477,96.477,0,0,1,38.16172,46.04488c8.30833,21.1322,9.64253,44.16807,8.2108,66.61655-.86582,13.57543-2.70081,27.06191-4.54995,40.53107a2.47156,2.47156,0,0,0,1.66593,2.9341,2.39976,2.39976,0,0,0,2.9341-1.66593Z"
              transform="translate(-278.41883 -186)"
              fill="#f2f2f2"
            />
            <path
              d="M508.41464,627.74531A45.72508,45.72508,0,0,1,468.574,648.308c-20.168-.9574-36.98175-15.03342-52.11726-28.39692l-44.76782-39.52659,29.62888-1.41793c21.30733-1.01969,43.16436-1.97084,63.45886,4.6s39.01115,22.38432,42.72212,43.39076"
              transform="translate(-278.41883 -186)"
              fill="#e6e6e6"
            />
            <path
              d="M550.26275,685.10826c-16.16816-28.60854-34.92182-60.40367-68.43147-70.5659a76.36216,76.36216,0,0,0-28.78336-2.97193c-3.05594.2635-2.29284,4.97414.75755,4.71112a70.94251,70.94251,0,0,1,45.93372,12.15238c12.95157,8.81578,23.03578,21.07206,31.571,34.06927,5.22806,7.96119,9.911,16.26013,14.59488,24.54792,1.49686,2.6486,5.87207.7367,4.35771-1.94286Z"
              transform="translate(-278.41883 -186)"
              fill="#f2f2f2"
            />
            <path
              d="M425.47233,297.79377,286.264,268.6283l-1.80908-.37811a5.00221,5.00221,0,0,0-5.5033,7.13867L334.818,387.16057a5.01834,5.01834,0,0,0,3.74359,2.70708,4.96814,4.96814,0,0,0,4.37012-1.52751l38.101-40.65511a2.91032,2.91032,0,0,1,2.13318-.94676,3.01067,3.01067,0,0,1,2.68884,1.54207l7.93964,14.47938a4.88617,4.88617,0,0,0,5.486,2.4747l.039-.00886a4.893,4.893,0,0,0,3.84943-4.67026l1.37408-33.54053a3.05836,3.05836,0,0,1,.29987-1.20657,3.2543,3.2543,0,0,1,.78253-.978l22.01147-18.2886a5.0056,5.0056,0,0,0-2.16442-8.74782Zm.89209,7.21182L404.353,323.29413a4.93258,4.93258,0,0,0-.77392.79126l-117.54865-52.471a1.7431,1.7431,0,0,0-.32275-.11109,2.00254,2.00254,0,0,0-1.64795,3.57464l96.81213,70.23378a4.79568,4.79568,0,0,0-1.29956,1.00322l-38.10058,40.65487a3.00046,3.00046,0,0,1-4.8686-.70764L280.73685,274.4905a3.0078,3.0078,0,0,1,3.30286-4.27939l1.852.38872,139.16492,29.15495a3.0067,3.0067,0,0,1,1.30774,5.25075Z"
              transform="translate(-278.41883 -186)"
              fill="#ccc"
            />
            <path
              d="M425.47233,297.79377,286.264,268.6283l-1.80908-.37811a5.00221,5.00221,0,0,0-5.5033,7.13867L334.818,387.16057a5.01834,5.01834,0,0,0,3.74359,2.70708,4.96814,4.96814,0,0,0,4.37012-1.52751l38.101-40.65511a2.91032,2.91032,0,0,1,2.13318-.94676,3.01067,3.01067,0,0,1,2.68884,1.54207l7.93964,14.47938a4.88617,4.88617,0,0,0,5.486,2.4747l.039-.00886a4.893,4.893,0,0,0,3.84943-4.67026l1.37408-33.54053a3.05836,3.05836,0,0,1,.29987-1.20657,3.2543,3.2543,0,0,1,.78253-.978l22.01147-18.2886a5.0056,5.0056,0,0,0-2.16442-8.74782Zm.89209,7.21182-22.01148,18.28857a4.93258,4.93258,0,0,0-.77392.79126,4.6504,4.6504,0,0,0-.52747.838,4.7969,4.7969,0,0,0-.35706.95291l.00226.00975a4.7314,4.7314,0,0,0-.15124,1.04971l-1.3736,33.54043a2.90448,2.90448,0,0,1-2.30615,2.80134l-.01953.00446a2.91089,2.91089,0,0,1-3.29956-1.47486l-7.94184-14.4891a4.98945,4.98945,0,0,0-4.11511-2.58151l-.00952.00216c-.1142-.00473-.228-.00958-.3396-.00473a4.86594,4.86594,0,0,0-2.26868.57772,4.79584,4.79584,0,0,0-1.29956,1.00321l-38.10064,40.65488a3.00046,3.00046,0,0,1-4.8686-.70764L280.73685,274.4905a3.0078,3.0078,0,0,1,3.30286-4.27939l1.852.38872,139.16492,29.15495a3.0067,3.0067,0,0,1,1.30774,5.25075Z"
              transform="translate(-278.41883 -186)"
              fill="#3f3d56"
            />
            <path
              d="M404.024,324.2817l-.81537,1.82646-.51172-.22209-.00225-.00975L285.23917,273.456l98.24115,71.28274.00952-.00216.2602.19719-1.1698,1.61979-1.7082-1.24188-96.81219-70.23375a2.00254,2.00254,0,0,1,1.648-3.57465,1.74435,1.74435,0,0,1,.32275.1111l117.54859,52.471Z"
              transform="translate(-278.41883 -186)"
              fill="#3f3d56"
            />
            <path
              d="M706.25863,464.02l5.08008,49.67.1001,1.02,1.50976,14.73L725.349,650.72v.02l2.40967,23.53a28.067,28.067,0,0,0-2.48975,4.01,28.88245,28.88245,0,0,0,.83985,27.65q9.0747-2.28,17.8999-5.2a269.627,269.627,0,0,0,35.52-14.56,28.91316,28.91316,0,0,0-9.71-16.85l-12.4502-149.59-1.08984-13.12-3.54981-42.59Z"
              transform="translate(-278.41883 -186)"
              fill="#ffb8b8"
            />
            <circle
              cx="695.37435"
              cy="282.24673"
              r="65.74745"
              transform="translate(-274.32698 388.37207) rotate(-45)"
              fill="#ffb8b8"
            />
            <path
              d="M572.82845,553.61c.01026.13.02051.26.03028.38a12.06566,12.06566,0,0,0,9.43017,10.76l98.11963,21.43a12.14939,12.14939,0,0,0,2.59033.28,12.02743,12.02743,0,0,0,11.58985-8.83c.21-.78.43994-1.58.68994-2.41v-.01c3.31006-11.24,9.22021-26.54,17.66992-45.77q2.86524-6.525,6.12988-13.67c.40039-.88.81006-1.77,1.21045-2.66q6.73462-14.625,15.02979-31.66a78.80457,78.80457,0,0,0,6.08984-17.43,79.68854,79.68854,0,0,0-4.02978-47.63,78.70089,78.70089,0,0,0-4.3501-8.95,80.05576,80.05576,0,0,0-63.33984-40.31c-2.07032-.17-4.12989-.25-6.2002-.25a80.49765,80.49765,0,0,0-55.48975,22.52,78.57059,78.57059,0,0,0-19.51025,30.58c-.25977.73-.5,1.47-.73975,2.21a297.57358,297.57358,0,0,0-8.88037,35.72c-1.32959,7.17005-2.40967,14.24-3.27978,21.13A435.95285,435.95285,0,0,0,572.82845,553.61Z"
              transform="translate(-278.41883 -186)"
              fill="#5acec0"
            />
            <path
              d="M529.61849,679.25a266.03851,266.03851,0,0,0,196.49024,26.68q9.0747-2.28,17.8999-5.2A447.40166,447.40166,0,0,0,725.349,650.74v-.02C713.32845,623.77,702.2889,607.28,696.90853,600a9.35191,9.35191,0,0,1-1.33008-8.49l1.67041-5.01a12.02137,12.02137,0,0,0-1.97021-11.28v-.01c-.10986-.14-.23-.28-.3501-.42-43.71-49.8-119.90967-22.63-120.67969-22.35l-.38037.14-.23974.33c-.26026.36005-.52.71-.77,1.08C552.19857,582.94,538.46859,627.44,529.61849,679.25Z"
              transform="translate(-278.41883 -186)"
              fill="#2f2e41"
            />
            <path
              d="M439.773,358.61929a28.17863,28.17863,0,0,1,.64058,4.39047l114.99285,66.33892L583.35708,413.258l29.797,39.00854-46.71284,33.29408a21.41521,21.41521,0,0,1-25.69341-.626L422.17043,391.38812A28.0997,28.0997,0,1,1,439.773,358.61929Z"
              transform="translate(-278.41883 -186)"
              fill="#ffb8b8"
            />
            <path
              d="M557.16879,428.33v.01a12.00147,12.00147,0,0,0,2.08007,4.15l19.61963,25.42,9.3501,12.13,8.2002,10.62a12.04355,12.04355,0,0,0,18.21,1l29.77978-30.92,12.29-12.77a33.45464,33.45464,0,0,0-41.02-52.86l-7.67969,4.29-45.09033,25.22a12.07049,12.07049,0,0,0-5.73974,13.71Z"
              transform="translate(-278.41883 -186)"
              fill="#5acec0"
            />
            <path
              d="M687.22884,444.27l1.87989,60.05.00976.38a12.04244,12.04244,0,0,0,14.18018,11.48l8.14014-1.47,2.08007-.38h.00977l6.76025-1.22,35.98975-6.5,6.89014-1.24a12.05732,12.05732,0,0,0,9.27-15.71l-19.41016-57.47a33.44987,33.44987,0,0,0-65.79981,12.08Z"
              transform="translate(-278.41883 -186)"
              fill="#5acec0"
            />
            <path
              d="M684.96813,267.124c-16.89851,11.56558-39.08664,23.45431-56.34585,11.13792-11.33271-8.08717-14.9033-23.06272-10.30768-36.20474,8.26428-23.63319,30.97022-34.03763,52.68281-42.01285,28.22634-10.36778,58.96069-18.61581,88.09981-11.19092s54.89148,35.63736,49.63132,65.24391c-4.23012,23.809-26.68869,43.61991-23.50043,67.59065,3.20873,24.12463,30.33945,36.82317,54.29156,41.13482s50.75507,5.697,67.96851,22.90143c21.95889,21.94736,16.47537,61.17588-4.18705,84.34794s-51.8431,33.67573-82.05721,40.81626c-40.03183,9.46075-83.3294,14.43278-121.34952-1.26828s-67.6069-57.96651-56.59308-97.59918c4.65222-16.74079,15.61146-30.889,26.203-44.66279s21.31643-28.17709,25.3566-45.076c3.36682-14.08244.87489-30.43285-8.46386-40.9963a11.87754,11.87754,0,0,1-1.59114-13.88358Z"
              transform="translate(-278.41883 -186)"
              fill="#2f2e41"
            />
          </svg>
        </div>
      </div>
    </>
  );
};

export default Contact;
