import streamlit as st
def main():
    st.title("Hello, Streamlit!")
    st.write("This is a simple Streamlit app.") 
    if st.button("Click Me"):
        st.write("Button clicked!") 
if __name__ == "__main__":
    main()
# To run this Streamlit app, use the command: