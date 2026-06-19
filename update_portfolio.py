import json
import re

projects = [
  ["Tools App", "Saas App Promo", "Script, UI Motion, Animation, Sound Design, Edit", "https://youtu.be/XUR2dRRTln8?si=ozKqthDk80QR8XIl"],
  ["Content Manager", "Saas Promo, Tutorial, Video Documentation", "Script, AI Voiceover, Video Edit, Saas Test, Motion Graphics, Screen Record, Thumbnail With AI, Channel Manager", "https://www.youtube.com/@NavidiumAppsShopify"],
  ["Bangladesh Army CMP Project", "Historical Documentary", "Motion Graphics, Edit, Music, and Sound Design", "https://www.linkedin.com/posts/biniaminsheikh_videoediting-documentarystyle-sounddesign-activity-7400879332698664960-FkCX"],
  ["Bangladesh 8 Division 50th Anniversary", "Historical Documentary", "Motion Graphics, Edit, Music, and Sound Design", "https://www.linkedin.com/posts/biniaminsheikh_im-proud-to-share-that-i-had-the-opportunity-activity-7395558600942784513-69HK"],
  ["Reel About AI", "Reel", "Edit, Music, Subtitle, Motion Graphics", "https://drive.google.com/file/d/1FOfI5JfW65tUBOOjklbyxTakD468tS_P/view?usp=drive_link"],
  ["FundedNext", "Promo Video", "Edit, Color, Sound Design", "https://drive.google.com/file/d/1TLTi1Pl9nJNJy1LAEkoklJTCM3UI9DlG/view?usp=sharing"],
  ["KashKhata", "Saas App Bangla Promo", "Script, Motion Graphics, Edit, Music, and Sound Design", "https://drive.google.com/file/d/1mKq9U001drZEnBzTL4CKMFv3MG2KkFi-/view?usp=drivesdk"],
  ["Reorder Promo", "Saas App Promo", "Motion Graphics, Edit, Music, and Sound Design", "https://youtu.be/YR6v52wynJA?si=Aa7Jq2kJJDRLGvLn"],
  ["App Tutorial", "Web App Tutorial", "Script, Animation, Edit", "https://www.youtube.com/@NavidiumAppsShopify/playlists"],
  ["Promo Ads", "Promo Video", "Cinematography, Directing, Color & Edit", "https://www.linkedin.com/posts/biniaminsheikh_cinematography-fashionfilm-creativedirection-activity-7262892650494590978-NypL"],
  ["Rishka Fest", "Festival Promo", "Cinematography, Directing, Color & Edit", "https://www.linkedin.com/posts/biniaminsheikh_rishkafestival-cinematography-mobilefilmmaking-activity-7274114028237402114-TOsP"],
  ["Promo", "Aps Fashion Winter Product", "Product Photography And Motion Graphics", "https://www.linkedin.com/posts/biniaminsheikh_photography-motionvideo-creativeprojects-activity-7257437658149249024-YthV"],
  ["Ads", "Ads", "Script, Cinematography, Directing, Color & Edit", "https://www.linkedin.com/posts/biniaminsheikh_advertising-cinematography-videoediting-activity-7262126954286391297-lfqL"],
  ["Chitro Kotha", "Music Video", "Cinematography, Video Editing, Color Grading and Direction", "https://www.youtube.com/watch?v=8O4b5QiBtBM"],
  ["Ontim Valobasha", "Short Film", "Assistant Director, Casting Director", "https://www.youtube.com/watch?v=8DZjxmR5FpM"],
  ["Onushthan Reel", "Event Photo Reel", "Photography And Motion Graphics", "https://drive.google.com/file/d/1qycHVbN8zYUqvNPsh_3V2OfLYA12xyj6/view?usp=drive_link"],
  ["Babar Lekha Dairy", "Short Film", "Assistant Director, Casting Director", "https://youtu.be/mnfuqQpifq0?si=whvF1CwNo4ryANQQ"],
  ["Illusion", "Short Film", "Assistant Director, Casting Director", "https://youtu.be/J19AIOXtaZw?si=Vp2rERl8KBKzhewc"],
  ["Panku Boys", "Music Video", "Cinematography, Video Editing And Color Grading", "https://www.youtube.com/watch?v=8O4b5QiBtBM"],
  ["Kali Kapali", "Music Video", "Cinematography, Video Editing, Color Grading Ad VFX", "https://www.youtube.com/watch?v=HYbb7ayFJXc"],
  ["Kalo Golam", "TV Drama", "Assistant Director", "https://www.youtube.com/watch?v=g0pEDno618k"],
  ["Tia", "TV Drama", "Assistant Director", "https://youtu.be/7rhjC4dDGUU?si=Dgs1GBmFFz7xcy06"],
  ["Abbas Mia O Sada Porir Golpo", "TV Drama", "Assistant Director and Casting Director", "https://www.youtube.com/watch?v=21lloPpUlIY&t=20s"],
  ["Food Station 19 Attack", "Tv Drama", "Visual Effect", "https://www.youtube.com/watch?v=8SZLhAOJXEA&t=101s"],
  ["JolRong", "Short Film", "Colour and Visual Effect", "https://youtu.be/JLAMT7GFtZE?si=xcCObL2Jvt-ap02a"],
  ["Shopnow Ghor", "Short FIlm", "Colour And Sound", "https://www.youtube.com/watch?v=A-Ukz6UbW0Y"],
  ["Info", "Information", "Motion And Video Edit", "https://drive.google.com/file/d/1IRnXFlb9jpLGFqLIsCpTHKokUrP9lqdV/view?usp=sharing"],
  ["Office Picnic", "Promo", "Cinematography, Motion And Edit", "https://www.youtube.com/watch?v=LT5xvDjlZ48"],
  ["Bike Review", "Youtube Video", "Colour And Video Edit", "https://drive.google.com/file/d/1z9meMj8_wL-AfWr3IJ0Mo_ZxhnRa2WC0/view?usp=drive_link"],
  ["Course Preview", "Edtech", "Cinematography, Video Edit", "https://www.youtube.com/watch?v=atOq_CKI15E"],
  ["Course Preview 2", "Edtech", "Cinematography, Video Edit", "https://youtu.be/pfs4RY2t62o?si=2fJn8R9IUsPoQSVf"],
  ["Course Preview 3", "Edtech", "Cinematography, Video Edit", "https://youtu.be/pfs4RY2t62o?si=2fJn8R9IUsPoQSVf"],
  ["Course Preview 4", "Edtech", "Cinematography, Video Edit", "https://youtu.be/2BMcov9Jefs?si=d2NGgwQTYRHGTZMK"],
  ["Motion Banner", "Edtech", "Motion Graphics", "https://drive.google.com/file/d/1d3tch6BIoOhRGB3u50VJxUUG9LSylRQB/view?usp=sharing"],
  ["Course Preview 5", "Edtech", "Cinematography, Video Edit", "https://www.youtube.com/watch?v=pqPwvU_jrmA"],
  ["Course Promo", "Edtech", "Cinematography, Video Edit", "https://drive.google.com/file/d/1L5N-vlUtKXwAwkM5AaQfpFOCW6J-oGYZ/view?usp=sharing"]
]

categories = []
for p in projects:
    if p[1] not in categories:
        categories.append(p[1])
category_map = {}
for c in categories:
    slug = re.sub(r'[^a-z0-9]', '', c.lower().replace(' ', ''))
    category_map[c] = slug

output_projects = []
for i, p in enumerate(projects):
    title, cat, desig, link = p
    slug = category_map[cat]
    software = [s.strip() for s in desig.replace('And', ',').replace('and', ',').replace('&', ',').split(',')]
    software = [s for s in software if s]
    thumbnail = "linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)"
    if i % 3 == 1:
        thumbnail = "linear-gradient(135deg, #1e1b4b 0%, #311042 100%)"
    elif i % 3 == 2:
        thumbnail = "linear-gradient(135deg, #030712 0%, #111827 100%)"
    
    # embed link for youtube
    video_url = link
    if "youtu.be" in link:
        vid = link.split("youtu.be/")[1].split("?")[0]
        video_url = f"https://www.youtube.com/embed/{vid}"
    elif "youtube.com/watch" in link:
        vid = link.split("v=")[1].split("&")[0]
        video_url = f"https://www.youtube.com/embed/{vid}"
    
    proj_str = f"""  {{
    id: {i+1},
    title: "{title}",
    category: "{cat}",
    categorySlug: "{slug}",
    thumbnail: "{thumbnail}",
    videoUrl: "{video_url}",
    duration: "Link",
    software: {json.dumps(software)},
    desc: "{title} - {cat}. Roles: {desig}",
    stats: "View Project",
  }}"""
    output_projects.append(proj_str)

categories_str = "const CATEGORIES = [\n  { label: \"All Works\", slug: \"all\" },\n"
for c, s in category_map.items():
    categories_str += f"  {{ label: \"{c}\", slug: \"{s}\" }},\n"
categories_str += "];\n\n"

proj_array_str = "const PROJECTS: Project[] = [\n" + ",\n".join(output_projects) + "\n];"

with open("d:/BINI AMIN SHEIKH/src/components/Portfolio.tsx", "r", encoding="utf-8") as f:
    content = f.read()

content = re.sub(r'const CATEGORIES = \[.*?\];', categories_str.strip(), content, flags=re.DOTALL)
content = re.sub(r'const PROJECTS: Project\[\] = \[.*?\];', proj_array_str, content, flags=re.DOTALL)

with open("d:/BINI AMIN SHEIKH/src/components/Portfolio.tsx", "w", encoding="utf-8") as f:
    f.write(content)

print("Portfolio updated successfully.")
