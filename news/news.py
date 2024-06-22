import requests
from bs4 import BeautifulSoup

# HTML을 가져오는 함수
def get_html():
    response = requests.get("https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&ssc=tab.nx.all&query=&oquery=%5C&tqi=iQTKedpzLi0ssF6wQrGssssstSG-271166")
    return response.text

# title과 url을 가져오는 함수
def get_titles_and_urls(html):
    soup = BeautifulSoup(html, 'html.parser')
    words = soup.select(".question_text")
    if words:
        titles = [word.text for word in words]
        urls = [word.attrs['href'] for word in words]
    else:
        words = soup.select(".lnk_tit")
        titles = [word.text for word in words]
        urls = [word.attrs['href'] for word in words]
    return titles, urls

# HTML 파일 생성 및 title과 url 삽입
with open('news.html', 'w') as file:
    new_content = '<h1>재미있는 지식들</h1>\n'
    file.write('<!DOCTYPE html>\n')
    file.write('<html>\n')
    file.write('<head>\n')
    file.write('<title>News</title>\n')
    file.write('</head>\n')
    file.write('<body>\n')

# CSS 파일 연결
    file.write('<link rel="stylesheet" type="text/css" href="news.css">\n')
    
    file.write('</head>\n')
    file.write('<body>\n')

    new_content = '<h1>재미있는 지식들</h1>\n'
    file.write(new_content)



 # 추가할 내용인 <div> 태그 추가
    additional_content = '<div id="box">본 내용은 네이버의 재미있는 지식 서비스의 크롤링입니다.</div>\n'
    file.write(additional_content)

# 추가할 내용인 <div> 태그 추가
    file.write('<div class="container">\n')

    # 기존 코드와 동일하게 내용 추가
    for _ in range(4):
        html = get_html()  # 새로운 HTML 가져오기
        titles, urls = get_titles_and_urls(html)  # title과 url 가져오기
        
        # 각 링크를 <div> 태그로 감싸서 추가
        for title, url in zip(titles, urls):
            file.write('<div class="line">\n')
            file.write(f'<a href="{url}">{title}</a><br>\n')
            file.write('</div>\n')


    file.write('</div>\n')
    file.write('</body>\n')
    file.write('</html>\n')
