import { useNavigate } from 'react-router-dom';
import React, { useState } from "react";
import "./Home.css";

function Home() {
  const navigate = useNavigate();
  const[name, setName] = useState("");
  const[classification, setClassification] =useState("");
  const[actMat, setActMat] = useState("");
  const[actEng, setActEng] = useState("");
  const[actSci, setActSci] = useState("");
  const[actRead, setActRead] =useState("");

  const[transcript, setTranscript] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
        name,
        classification,
        actMat,
        actEng,
        actSci,
        actRead,
        transcript,

  });
    navigate("/options");
};
  

  const handleReset = () => {
    setName("");
    setClassification("");

    setActMat("");
    setActEng("");
    setActSci("");
    setActRead("");
    setTranscript(null);
 };


  return (
    <div className="home-page">
      <h1 className="home-title">Student Questionnaire</h1>
      <fieldset className="home-fieldset">
          <form onSubmit={handleSubmit}>
                    <label htmlfor="name">
                        Name*
                    </label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={name}
                        onChange={(e) =>
                            setName(e.target.value)
                        }
                        placeholder="Enter Your Name"
                        required
                    />

                    <label htmlfor="classification">Classification*</label>
                    <select
                       id="classification"
                       value={classification}
                       onChange={(e) => setClassification(e.target.value)}
                       required
                    >
                      <option value="" disabled>
                        Select one  
                      </option>
                      <option value="Freshman">Freshman</option>
                      <option value="Sophomore">Sophomore</option>
                      <option value="Junior">Junior</option>
                      <option value="Senior">Senior</option>
                      </select>


                    <label htmlfor="actEng">
                        ACT English*
                    </label>
                    <input
                        type="number"
                        name="actEng"
                        id="actEng"
                        min="0"
                        max="36"
                        value={actEng}
                        onChange={(e) =>
                            setActEng(e.target.value)
                        }
                        placeholder="0-36"
                        required
                    />

                    <label htmlfor="actMat">
                        ACT Math*
                    </label>
                    <input
                        type="number"
                        name="actMat"
                        id="actMat"
                        min="0"
                        max="36"
                        value={actMat}
                        onChange={(e) =>
                            setActMat(e.target.value)
                        }
                        placeholder="0-36"
                        required
                    />

                    <label htmlfor="actsci">
                        ACT Science*
                    </label>
                    <input
                        type="number"
                        name="actSci"
                        id="actSci"
                        min="0"
                        max="36"
                        value={actSci}
                        onChange={(e) =>
                            setActSci(e.target.value)
                        }
                        placeholder="0-36"
                        required
                    />

                    <label htmlfor="actRead">
                        ACT Reading*
                    </label>
                    <input
                        type="number"
                        name="actRead"
                        id="actRead"
                        min="0"
                        max="36"
                        value={actRead}
                        onChange={(e) =>
                            setActRead(e.target.value)
                        }
                        placeholder="0-36"
                        required
                    />


                    <label htmlfor="transcript">
                        Transcript ((PDF)*)
                    </label>
                    <input
                        type="file"
                        name="transcript"
                        id="transcript"
                        accept=".pdf"
                        onChange={(e) =>
                            setTranscript(e.target.files?.[0] ?? null)
                        }
                        required
                  />  

        <div className="submit">
          <button type="button" onclick={handleReset}>Reset</button>
          <button type="button" onClick={() => navigate('/options')}>
            Get Advised!
          </button>
        </div>
      </form>
      </fieldset>
    </div>
  );
}

export default Home;
