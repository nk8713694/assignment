import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { startRecording, stopRecording } from '../store/audioSlice';

const AudioRecorder = () => {
  const [recording, setRecording] = useState(false);
  const dispatch = useDispatch();

  const handleRecordClick = () => {
    if (!recording) {
      setRecording(true);
      dispatch(startRecording());
    } else {
      setRecording(false);
      dispatch(stopRecording());
    }
  };

  return (
    <button onClick={handleRecordClick}>
      {recording ? 'Stop Recording' : 'Start Recording'}
    </button>
  );
};

export default AudioRecorder;
