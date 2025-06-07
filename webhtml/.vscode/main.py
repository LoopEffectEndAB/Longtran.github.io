import streamlit as st

# Giả lập dữ liệu tài khoản (có thể thay bằng database thật)
USER_CREDENTIALS = {
    "admin": "123456",
    "user": "password"
}

def login(username, password):
    return USER_CREDENTIALS.get(username) == password

def main():
    st.set_page_config(page_title="Đăng nhập | GPTOnline.ai", layout="centered")
    st.title("🔐 Đăng nhập vào hệ thống")

    with st.form("login_form"):
        username = st.text_input("Tên đăng nhập")
        password = st.text_input("Mật khẩu", type="password")
        login_btn = st.form_submit_button("Đăng nhập")

    if login_btn:
        if login(username, password):
            st.success(f"Xin chào {username}! Bạn đã đăng nhập thành công.")
            st.info("👉 Truy cập GPTOnline.ai để tạo nội dung SEO chất lượng cao!")
        else:
            st.error("Sai tên đăng nhập hoặc mật khẩu. Vui lòng thử lại.")

if __name__ == "__main__":
    main()

#streamlit run .\.vscode\main.py