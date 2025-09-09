// 全局变量
let currentSlide = 0;
let slideInterval;
let isLoading = false;

// 直接嵌入数据，避免跨域问题
let slideshow = [
  {
    "_id": "1",
    "pic_src": "assets/images/rol/001.jpg"
  },
  {
    "_id": "2",
    "pic_src": "assets/images/rol/002.jpg"
  },
  {
    "_id": "3",
    "pic_src": "assets/images/rol/003.jpg"
  }
];

let collections = [
  {
    "_id": "01",
    "title": "吴虎鼎",
    "origin": "长安博物馆",
    "describe": "吴虎鼎是西周时期青铜器，1992年在申店乡徐家寨村出土。鼎为立耳、小平沿、半球形深腹，口沿下饰窃曲纹带。铭文主要记述了周王授予吴虎土地的事实，涉及西周的土地制度、历法、地名等，是研究西周历史的珍贵资料。于1998年被定为国家一级文物。",
    "col_pic": "assets/images/col/01.jpg",
    "hand_drawing": "assets/images/hwriting/01.jpg",
    "ar_video": "assets/videos/ar/01.mp4",
    "voice_audio": "assets/voice/01.m4a",
    "base": "西周时期青铜器",
    "view": 0
  },
  {
    "_id": "02",
    "title": "青釉虎子",
    "origin": "长安博物馆",
    "describe": "该器在造型和纹饰上都有极高的艺术表现力。器呈虎形，虎昂首引颈长啸，面部狰狞，四肢细长弯曲，露出虎爪。通体施青釉，釉色青翠明亮，是青瓷艺术佳作。",
    "col_pic": "assets/images/col/02.jpg",
    "hand_drawing": null,
    "ar_video": "assets/videos/ar/02.mp4",
    "voice_audio": "assets/voice/02.m4a",
    "base": "珍品青铜器",
    "view": 0
  },
  {
    "_id": "03",
    "title": "刀马人瓷瓶",
    "origin": "长安博物馆",
    "describe": "这件刀马人瓷瓶，以《三国演义》为题材，生动地再现了三国时期的英武场景。瓶身撇口，短束颈，筒形腹，平底设计，口沿处以两周青花细线描绘出弦纹，颈部装饰花叶纹，腹部则是精美的刀马人图。",
    "col_pic": "assets/images/col/03.jpg",
    "hand_drawing": null,
    "ar_video": "assets/videos/ar/03.mp4",
    "voice_audio": "assets/voice/03.m4a",
    "base": "清代瓷器",
    "view": 0
  },
  {
    "_id": "04",
    "title": "铜觯",
    "origin": "长安博物馆",
    "describe": "铜觯是商周时期青铜铸造的饮酒器皿，盛行于商代晚期至西周中期。其基本形制为圆腹侈口、束颈椭圆腹、圈足外撇，多数器物带有盖，体量小巧便于持握,是一件珍品。",
    "col_pic": "assets/images/col/04.jpg",
    "hand_drawing": "assets/images/hwriting/04.jpg",
    "ar_video": null,
    "base": "西周酒器",
    "view": 0
  },
  {
    "_id": "05",
    "title": "癸父爵",
    "origin": "长安博物馆",
    "describe": "癸父爵是商周时期的饮酒器和礼器。商周时期的酒器基本的组合是一爵一觚，觚和爵都是珍贵而崇高的礼器，只在宴礼盒祭祀的时候才能使用，觚和爵一般是在等级较高的墓葬中出土，显示出主人身份的高贵。",
    "col_pic": "assets/images/col/05.jpg",
    "hand_drawing": null,
    "ar_video": null,
    "base": "商周时期饮酒器",
    "view": 0
  },
  {
    "_id": "06",
    "title": "白瓷人形壶",
    "origin": "长安博物馆",
    "describe": "我馆展出的白瓷人形壶，胎质洁白坚硬，瓷化程度高，器壁轻薄，壶体为人形站姿，身着道家衣冠。双手握台灯于胸前，灯烛即为出水口。白瓷人形壶造型新颖，设计巧妙，工艺精湛，是白瓷壶中不可多得的精品。",
    "col_pic": "assets/images/col/06.jpg",
    "hand_drawing": null,
    "ar_video": null,
    "base": "宋代瓷器",
    "view": 0
  },
  {
    "_id": "07",
    "title": "青花缠枝连纹将军罐",
    "origin": "长安博物馆",
    "describe": "本馆展出的这件清代青花缠枝连纹将军罐，带宝珠顶高罐盖，盖沿外撇，沿边位黄颜色，罐位直口，口沿为黄色，上鼓腹，整个器身青花缠枝莲纹，罐身为直口，丰肩，敛腹。青花用料浓郁，缠枝纹用笔流畅。",
    "col_pic": "assets/images/col/07.jpg",
    "hand_drawing": null,
    "ar_video": null,
    "base": "清宫旧藏",
    "view": 0
  },
  {
    "_id": "08",
    "title": "练鹊",
    "origin": "长安博物馆",
    "describe": "练是白色的意思，鹊就是雀鸟，练鹊毛色洁白，两条尾羽长如飘带，古人视其为吉祥的鸟。这是一件稀世珍宝。",
    "col_pic": "assets/images/col/08.jpg",
    "hand_drawing": null,
    "ar_video": null,
    "base": "金代玉质文物",
    "view": 0
  },
  {
    "_id": "09",
    "title": "错金银虎镇",
    "origin": "长安博物馆",
    "describe": "镇是古代用来镇物之器。本馆展出的这件工艺精湛，生动逼真，精美细腻，是一件珍品。",
    "col_pic": "assets/images/col/09.jpg",
    "hand_drawing": null,
    "ar_video": null,
    "base": "古代镇物之器",
    "view": 0
  },
  {
    "_id": "10",
    "title": "金边龙凤玉佩",
    "origin": "长安博物馆",
    "describe": "本馆展出的这件金边龙凤玉佩，其材质是和田玉，上面雕刻着龙纹，以金包边，整件器物工艺精良、雍容华贵，是一件珍品。",
    "col_pic": "assets/images/col/10.jpg",
    "hand_drawing": null,
    "ar_video": null,
    "base": "清代金边龙凤玉佩",
    "view": 0
  },
  {
    "_id": "11",
    "title": "纪念币",
    "origin": "长安博物馆",
    "describe": "本馆纪念品，金、银纪念币",
    "col_pic": "assets/images/col/11-1.jpg",
    "hand_drawing": null,
    "ar_video": null,
    "base": "长安博物馆纪念币",
    "view": 0,
    "gallery": [
      "assets/images/col/11-1.jpg",
      "assets/images/col/11-2.jpg"
    ]
  }
];

// DeepSeek API配置
const DEEPSEEK_API_KEY = 'sk-8f3d45665c874955ac3c8308414ff578';
const DEEPSEEK_API_URL = 'https://api.deepseek.com/v1/chat/completions';

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    initApp();
});

// 初始化应用
async function initApp() {
    try {
        // 数据已直接嵌入，无需加载
        console.log('数据加载完成:', { slideshow, collections });
        
        // 初始化轮播图
        initSwiper();
        
        // 渲染藏品
        renderCollections();
        
        // 绑定事件
        bindEvents();
        
        console.log('应用初始化完成');
    } catch (error) {
        console.error('应用初始化失败:', error);
    }
}



// 初始化轮播图
function initSwiper() {
    const swiperWrapper = document.getElementById('swiper-wrapper');
    const pagination = document.querySelector('.swiper-pagination');
    
    if (!swiperWrapper || !pagination) return;
    
    // 清空现有内容
    swiperWrapper.innerHTML = '';
    pagination.innerHTML = '';
    
    // 生成轮播图项目
    slideshow.forEach((item, index) => {
        // 创建轮播图项目
        const slide = document.createElement('div');
        slide.className = 'swiper-slide';
        slide.innerHTML = `<img src="${item.pic_src}" alt="轮播图${index + 1}" onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjBmMGYwIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPuWbvueJh+WKoOi9veS4rTwvdGV4dD48L3N2Zz4='" />`;
        swiperWrapper.appendChild(slide);
        
        // 创建分页点
        const bullet = document.createElement('div');
        bullet.className = `swiper-pagination-bullet ${index === 0 ? 'active' : ''}`;
        bullet.addEventListener('click', () => goToSlide(index));
        pagination.appendChild(bullet);
    });
    
    // 启动自动播放
    startAutoPlay();
}

// 轮播图自动播放
function startAutoPlay() {
    if (slideInterval) clearInterval(slideInterval);
    
    slideInterval = setInterval(() => {
        nextSlide();
    }, 3000);
}

// 下一张轮播图
function nextSlide() {
    currentSlide = (currentSlide + 1) % slideshow.length;
    updateSlider();
}

// 跳转到指定轮播图
function goToSlide(index) {
    currentSlide = index;
    updateSlider();
    // 重新启动自动播放
    startAutoPlay();
}

// 更新轮播图显示
function updateSlider() {
    const swiperWrapper = document.getElementById('swiper-wrapper');
    const bullets = document.querySelectorAll('.swiper-pagination-bullet');
    
    if (swiperWrapper) {
        const translateX = -currentSlide * 100;
        swiperWrapper.style.transform = `translateX(${translateX}%)`;
    }
    
    // 更新分页点
    bullets.forEach((bullet, index) => {
        bullet.classList.toggle('active', index === currentSlide);
    });
}

// 渲染藏品列表
function renderCollections() {
    const collectionsGrid = document.getElementById('collections-grid');
    if (!collectionsGrid) return;
    
    collectionsGrid.innerHTML = '';
    
    if (collections.length === 0) {
        collectionsGrid.innerHTML = '<div class="loading">暂无藏品数据</div>';
        return;
    }
    
    collections.forEach(collection => {
        const collectionItem = document.createElement('div');
        collectionItem.className = 'collection-item';
        
        // 构建按钮HTML
        let buttonsHtml = '';
        if (collection.ar_video) {
            buttonsHtml += `<button class="ar-video-btn" onclick="playARVideo('${collection.ar_video}')">🎬 AR视频</button>`;
        }
        if (collection.voice_audio) {
            buttonsHtml += `<button class="voice-audio-btn" onclick="playVoiceAudio('${collection.voice_audio}')">🔊 语音讲解</button>`;
        }
        if (collection.hand_drawing) {
            buttonsHtml += `<button class="handwriting-btn" onclick="toggleHandwriting('${collection._id}', '${collection.col_pic}', '${collection.hand_drawing}')">🎨 手绘图</button>`;
        }
        
        collectionItem.innerHTML = `
            <div class="collection-image">
                <img id="img-${collection._id}" src="${collection.col_pic}" alt="${collection.title}" 
                     onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjBmMGYwIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPuaXoOWbvueJhzwvdGV4dD48L3N2Zz4='" />
                ${buttonsHtml ? `<div class="collection-buttons">${buttonsHtml}</div>` : ''}
            </div>
            <div class="collection-info">
                <div class="collection-title">${collection.title}</div>
                <div class="collection-origin">${collection.origin}</div>
                <div class="collection-base">${collection.base}</div>
            </div>
        `;
        
        // 添加点击事件
        collectionItem.addEventListener('click', (e) => {
            // 如果点击的是按钮，不触发详情页
            if (e.target.tagName === 'BUTTON') return;
            showCollectionDetail(collection);
        });
        
        collectionsGrid.appendChild(collectionItem);
    });
}

// AR视频播放功能
function playARVideo(videoSrc) {
    const modal = document.getElementById('collection-modal');
    const modalBody = document.getElementById('modal-body');
    
    if (!modal || !modalBody) return;
    
    modalBody.innerHTML = `
        <div class="video-container">
            <video controls autoplay style="width: 100%; max-height: 70vh;">
                <source src="${videoSrc}" type="video/mp4">
                您的浏览器不支持视频播放
            </video>
        </div>
        <div class="video-info">
            <h3>AR视频展示</h3>
            <p>通过AR技术展示文物的立体效果和历史背景</p>
        </div>
    `;
    
    modal.style.display = 'block';
}

// 语音讲解播放功能
function playVoiceAudio(audioSrc, title) {
    // 停止当前播放的音频
    const existingAudio = document.querySelector('.voice-audio-player');
    if (existingAudio) {
        existingAudio.pause();
        existingAudio.remove();
    }
    
    // 创建新的音频元素，直接播放不显示界面
    const audio = document.createElement('audio');
    audio.className = 'voice-audio-player';
    audio.src = audioSrc;
    audio.autoplay = true;
    audio.loop = false; // 确保不循环播放
    audio.style.display = 'none'; // 隐藏音频元素
    
    // 将音频元素添加到页面中（隐藏状态）
    document.body.appendChild(audio);
    
    // 音频播放结束后自动移除元素
    audio.addEventListener('ended', () => {
        audio.remove();
    });
    
    // 可选：显示一个简单的提示信息
    if (title) {
        console.log(`正在播放语音讲解：${title}`);
    }
}

// 停止语音播放的函数
function stopVoiceAudio() {
    const existingAudio = document.querySelector('.voice-audio-player');
    if (existingAudio) {
        existingAudio.pause();
        existingAudio.remove();
        console.log('语音讲解已停止');
    }
}

// 手绘图切换功能
let handwritingStates = {}; // 记录每个藏品的手绘图状态
let modalHandwritingStates = {}; // 记录模态框中每个藏品的手绘图状态

function toggleHandwriting(collectionId, originalSrc, handwritingSrc) {
    const img = document.getElementById(`img-${collectionId}`);
    if (!img) return;
    
    const isShowingHandwriting = handwritingStates[collectionId] || false;
    
    if (isShowingHandwriting) {
        // 切换回原图
        img.src = originalSrc;
        handwritingStates[collectionId] = false;
        // 更新按钮文字
        const btn = document.querySelector(`button[onclick*="toggleHandwriting('${collectionId}'"]`);
        if (btn) btn.innerHTML = '🎨 手绘图';
    } else {
        // 切换到手绘图
        img.src = handwritingSrc;
        handwritingStates[collectionId] = true;
        // 更新按钮文字
        const btn = document.querySelector(`button[onclick*="toggleHandwriting('${collectionId}'"]`);
        if (btn) btn.innerHTML = '📷 原图';
    }
}

// 模态框中的手绘图切换功能
function toggleModalHandwriting(collectionId, originalSrc, handwritingSrc) {
    const img = document.getElementById(`modal-image-${collectionId}`);
    const btn = document.querySelector('.modal-handwriting-btn');
    
    if (!img || !btn) return;
    
    // 切换状态
    const isHandwriting = modalHandwritingStates[collectionId] || false;
    
    if (isHandwriting) {
        // 切换回原图
        img.src = originalSrc;
        img.onclick = function() { viewFullImage(originalSrc, this.alt); };
        btn.textContent = '查看手绘图';
        modalHandwritingStates[collectionId] = false;
    } else {
        // 切换到手绘图
        img.src = handwritingSrc;
        img.onclick = function() { viewFullImage(handwritingSrc, this.alt); };
        btn.textContent = '查看原图';
        modalHandwritingStates[collectionId] = true;
    }
}

// 显示藏品详情
function showCollectionDetail(collection) {
    const modal = document.getElementById('collection-modal');
    const modalBody = document.getElementById('modal-body');
    
    if (!modal || !modalBody) return;
    
    // 构建手绘图切换按钮（如果有手绘图）
    const handwritingButton = collection.hand_drawing ? 
        `<button class="modal-handwriting-btn" onclick="toggleModalHandwriting('${collection._id}', '${collection.col_pic}', '${collection.hand_drawing}')">
            查看手绘图
        </button>` : '';
    
    // 构建AR视频播放按钮（如果有AR视频）- 圆形图标按钮
    const arVideoButton = collection.ar_video ? 
        `<button class="modal-ar-icon-btn" onclick="playARVideo('${collection.ar_video}')" title="AR视频演示">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 5v14l11-7z" fill="currentColor"/>
            </svg>
        </button>` : '';
    
    // 构建语音讲解按钮（如果有语音文件）- 圆形图标按钮
    const voiceAudioButton = collection.voice_audio ? 
        `<button class="modal-voice-icon-btn" onclick="playVoiceAudio('${collection.voice_audio}', '${collection.title}')" title="语音讲解">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" fill="currentColor"/>
            </svg>
        </button>` : '';
    
    // 如果有gallery属性，构建轮播图
    let imageContent;
    if (collection.gallery && collection.gallery.length > 1) {
        const galleryImages = collection.gallery.map((img, index) => 
            `<img src="${img}" alt="${collection.title} ${index + 1}" class="gallery-image ${index === 0 ? 'active' : ''}" 
                 style="cursor: pointer;"
                 onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjBmMGYwIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPuaXoOWbvueJhzwvdGV4dD48L3N2Zz4=" />`
        ).join('');
        
        const indicators = collection.gallery.map((_, index) => 
            `<span class="gallery-indicator ${index === 0 ? 'active' : ''}" onclick="showGalleryImage('${collection._id}', ${index})"></span>`
        ).join('');
        
        imageContent = `
            <div class="gallery-container" id="gallery-${collection._id}">
                <div class="gallery-images" onclick="viewCurrentGalleryImage('${collection._id}')">
                    ${galleryImages}
                </div>
                <button class="gallery-prev" onclick="prevGalleryImage('${collection._id}')">&lt;</button>
                <button class="gallery-next" onclick="nextGalleryImage('${collection._id}')">&gt;</button>
                <div class="gallery-indicators">
                    ${indicators}
                </div>
            </div>
        `;
    } else {
        imageContent = `
            <img id="modal-image-${collection._id}" src="${collection.col_pic}" alt="${collection.title}" class="modal-image" 
                 onclick="viewFullImage(this.src, '${collection.title}')" style="cursor: pointer;"
                 onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjBmMGYwIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPuaXoOWbvueJhzwvdGV4dD48L3N2Zz4=" />
        `;
    }
    
    modalBody.innerHTML = `
        <div class="modal-image-container">
            ${imageContent}
            ${arVideoButton}
            ${voiceAudioButton}
            ${handwritingButton}
        </div>
        <div class="modal-title-container">
            <h2 class="modal-title">${collection.title}</h2>
        </div>
        <p class="modal-origin">${collection.origin}</p>
        <p class="modal-base">${collection.base}</p>
        <p class="modal-description">${collection.describe}</p>
    `;
    
    modal.style.display = 'block';
}

// 轮播图控制函数
let galleryStates = {}; // 记录每个藏品的轮播图状态

function showGalleryImage(collectionId, index) {
    const gallery = document.getElementById(`gallery-${collectionId}`);
    if (!gallery) return;
    
    const images = gallery.querySelectorAll('.gallery-image');
    const indicators = gallery.querySelectorAll('.gallery-indicator');
    
    // 隐藏所有图片和指示器
    images.forEach(img => img.classList.remove('active'));
    indicators.forEach(ind => ind.classList.remove('active'));
    
    // 显示当前图片和指示器
    if (images[index]) images[index].classList.add('active');
    if (indicators[index]) indicators[index].classList.add('active');
    
    galleryStates[collectionId] = index;
}

function nextGalleryImage(collectionId) {
    const collection = collections.find(c => c._id === collectionId);
    if (!collection || !collection.gallery) return;
    
    const currentIndex = galleryStates[collectionId] || 0;
    const nextIndex = (currentIndex + 1) % collection.gallery.length;
    showGalleryImage(collectionId, nextIndex);
}

function prevGalleryImage(collectionId) {
    const collection = collections.find(c => c._id === collectionId);
    if (!collection || !collection.gallery) return;
    
    const currentIndex = galleryStates[collectionId] || 0;
    const prevIndex = currentIndex === 0 ? collection.gallery.length - 1 : currentIndex - 1;
    showGalleryImage(collectionId, prevIndex);
}

function viewCurrentGalleryImage(collectionId) {
    const collection = collections.find(c => c._id === collectionId);
    if (!collection || !collection.gallery) return;
    
    const currentIndex = galleryStates[collectionId] || 0;
    const currentImageSrc = collection.gallery[currentIndex];
    viewFullImage(currentImageSrc, collection.title);
}

// 查看原图功能
function viewFullImage(imageSrc, title) {
    // 创建全屏图片查看器
    const fullImageModal = document.createElement('div');
    fullImageModal.className = 'full-image-modal';
    fullImageModal.innerHTML = `
        <div class="full-image-overlay" onclick="closeFullImage()">
            <div class="full-image-container">
                <img src="${imageSrc}" alt="${title}" class="full-image" />
                <button class="close-full-image" onclick="closeFullImage()">&times;</button>
            </div>
        </div>
    `;
    document.body.appendChild(fullImageModal);
    
    // 阻止body滚动
    document.body.style.overflow = 'hidden';
}

// 关闭全屏图片查看器
function closeFullImage() {
    const fullImageModal = document.querySelector('.full-image-modal');
    if (fullImageModal) {
        fullImageModal.remove();
        document.body.style.overflow = 'auto';
    }
}

// 绑定事件
function bindEvents() {
    // 底部导航切换
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            const targetPage = this.getAttribute('data-page');
            switchPage(targetPage);
            
            // 更新导航状态
            navItems.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // 模态框关闭
    const modal = document.getElementById('collection-modal');
    const closeBtn = document.querySelector('.close');
    
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
            stopVoiceAudio(); // 关闭详情页面时停止语音播放
        });
    }
    
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.style.display = 'none';
                stopVoiceAudio(); // 关闭详情页面时停止语音播放
            }
        });
    }
    
    // AI聊天功能
    const sendBtn = document.getElementById('send-btn');
    const chatInput = document.getElementById('chat-input-field');
    
    if (sendBtn) {
        sendBtn.addEventListener('click', sendMessage);
    }
    
    if (chatInput) {
        chatInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });
    }
}

// 页面切换
function switchPage(pageName) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('active');
    });
    
    const targetPage = document.getElementById(`${pageName}-page`);
    if (targetPage) {
        targetPage.classList.add('active');
    }
    
    // 如果切换到主页，重新启动轮播图
    if (pageName === 'home') {
        startAutoPlay();
    } else {
        // 停止轮播图自动播放
        if (slideInterval) {
            clearInterval(slideInterval);
        }
    }
}

// 发送AI消息
async function sendMessage() {
    const chatInput = document.getElementById('chat-input-field');
    const sendBtn = document.getElementById('send-btn');
    const chatMessages = document.getElementById('chat-messages');
    
    if (!chatInput || !sendBtn || !chatMessages) return;
    
    const message = chatInput.value.trim();
    if (!message || isLoading) return;
    
    // 添加用户消息
    addMessage(message, 'user');
    chatInput.value = '';
    
    // 设置加载状态
    isLoading = true;
    sendBtn.disabled = true;
    sendBtn.textContent = '发送中...';
    
    try {
        // 调用DeepSeek API
        const response = await callDeepSeekAPI(message);
        addMessage(response, 'assistant');
    } catch (error) {
        console.error('AI调用失败:', error);
        addMessage('抱歉，服务暂时不可用，请稍后再试。', 'assistant');
    } finally {
        // 恢复状态
        isLoading = false;
        sendBtn.disabled = false;
        sendBtn.textContent = '发送';
        scrollToBottom();
    }
}

// 添加消息到聊天区域
function addMessage(content, role) {
    const chatMessages = document.getElementById('chat-messages');
    if (!chatMessages) return;
    
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${role}`;
    messageDiv.innerHTML = `
        <div class="message-content">${content}</div>
    `;
    
    chatMessages.appendChild(messageDiv);
    scrollToBottom();
}

// 滚动到底部
function scrollToBottom() {
    const chatMessages = document.getElementById('chat-messages');
    if (chatMessages) {
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
}

// 调用DeepSeek API
async function callDeepSeekAPI(message) {
    try {
        const response = await fetch(DEEPSEEK_API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${DEEPSEEK_API_KEY}`
            },
            body: JSON.stringify({
                model: 'deepseek-chat',
                messages: [
                    {
                        role: 'system',
                        content: '你是一位专业的博物馆AI导览助手，专门为线上博物馆服务。你的职责是：1.介绍各类文物的历史背景、制作工艺、文化价值；2.解答游客关于历史文化的问题；3.推荐相关的文物和展品；4.用通俗易懂的语言传播文化知识。请保持专业、友好、耐心的态度，让每位游客都能感受到文化的魅力。'
                    },
                    {
                        role: 'user',
                        content: message
                    }
                ],
                max_tokens: 1000,
                temperature: 0.7
            })
        });
        
        if (!response.ok) {
            throw new Error(`API请求失败: ${response.status}`);
        }
        
        const data = await response.json();
        
        if (data.choices && data.choices.length > 0) {
            return data.choices[0].message.content;
        } else {
            throw new Error('API响应格式异常');
        }
    } catch (error) {
        console.error('DeepSeek API调用失败:', error);
        throw error;
    }
}

// 页面卸载时清理定时器
window.addEventListener('beforeunload', function() {
    if (slideInterval) {
        clearInterval(slideInterval);
    }
});