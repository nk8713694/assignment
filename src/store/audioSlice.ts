import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AudioState {
  recording: boolean;
  audioChunks: Blob[];
  interimTranscript: string;
  finalTranscript: string;
}

const initialState: AudioState = {
  recording: false,
  audioChunks: [],
  interimTranscript: '',
  finalTranscript: '',
};

const audioSlice = createSlice({
  name: 'audio',
  initialState,
  reducers: {
    startRecording: (state) => {
      state.recording = true;
    },
    stopRecording: (state) => {
      state.recording = false;
    },
    addAudioChunk: (state, action: PayloadAction<Blob>) => {
      state.audioChunks.push(action.payload);
    },
    setInterimTranscript: (state, action: PayloadAction<string>) => {
      state.interimTranscript = action.payload;
    },
    setFinalTranscript: (state, action: PayloadAction<string>) => {
      state.finalTranscript = action.payload;
    },
  },
});

export const {
  startRecording,
  stopRecording,
  addAudioChunk,
  setInterimTranscript,
  setFinalTranscript,
} = audioSlice.actions;

export default audioSlice.reducer;
