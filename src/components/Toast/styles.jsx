import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  width: 24rem;
  height: auto;
  background-color: var(--green);
  border-radius: 1.6rem;
  padding: 2.4rem 1.6rem;
  visibility: ${({visibility}) => visibility};
`
export const Emoji = styled.div`
  align-self: self-start;
  background-color: white;
  border-radius: 1.6rem;
  font-size: 1.8rem;
  padding: 0.8rem 1.4rem;
`
export const P = styled.p`
  font-size: 1.6rem;
  font-weight: 100;
  margin: 0;
`
export const CloseIcon = styled.button`
  border: none;
  cursor: pointer;
  width: 24px;
  height: 24px;
  background: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMjQiIGhlaWdodD0iMjQiCnZpZXdCb3g9IjAgMCAyNCAyNCI+CjxwYXRoIGQ9Ik0gNC43MDcwMzEyIDMuMjkyOTY4OCBMIDMuMjkyOTY4OCA0LjcwNzAzMTIgTCAxMC41ODU5MzggMTIgTCAzLjI5Mjk2ODggMTkuMjkyOTY5IEwgNC43MDcwMzEyIDIwLjcwNzAzMSBMIDEyIDEzLjQxNDA2MiBMIDE5LjI5Mjk2OSAyMC43MDcwMzEgTCAyMC43MDcwMzEgMTkuMjkyOTY5IEwgMTMuNDE0MDYyIDEyIEwgMjAuNzA3MDMxIDQuNzA3MDMxMiBMIDE5LjI5Mjk2OSAzLjI5Mjk2ODggTCAxMiAxMC41ODU5MzggTCA0LjcwNzAzMTIgMy4yOTI5Njg4IHoiPjwvcGF0aD4KPC9zdmc+') 50% 50% no-repeat;
  background-size: 100%;
`