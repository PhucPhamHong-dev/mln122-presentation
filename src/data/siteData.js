import {
  ArrowRight,
  CircleDot,
  Compass,
  Factory,
  GitMerge,
  Landmark,
  Layers3,
  Scale,
  ShieldCheck,
  Sparkles,
  Target,
  Telescope,
} from 'lucide-react'

export const navItems = [
  { id: 'hero', label: 'Mở đầu' },
  { id: 'theory', label: 'Lý luận' },
  { id: 'case-study', label: 'Case Study' },
  { id: 'analysis', label: 'Đánh giá' },
  { id: 'mini-game', label: 'Mini game' },
  { id: 'closing', label: 'Q&A' },
  { id: 'creative-product', label: 'Sản phẩm sáng tạo' },
]

export const heroHighlights = [
  {
    icon: Compass,
    title: 'Học thuyết',
    text: 'Từ cạnh tranh tự do đến độc quyền theo lăng kính Mác - Lênin.',
  },
  {
    icon: Factory,
    title: 'Case Study',
    text: 'Standard Oil như minh chứng lịch sử cho chu trình thâu tóm.',
  },
  {
    icon: Scale,
    title: 'Kết luận',
    text: 'Độc quyền không xóa bỏ cạnh tranh, chỉ đổi hình thức và quy mô.',
  },
]

export const theorySections = [
  {
    id: '1.1',
    label: '1.1. Cạnh tranh tự do',
    eyebrow: 'Mục 1.1',
    title: 'Cạnh tranh tự do là gì?',
    intro:
      'Cạnh tranh là sự ganh đua giữa những chủ thể kinh tế với nhau nhằm có được ưu thế về sản xuất, tiêu thụ và lợi ích tối đa.',
    layout: 'cards',
    cards: [
      {
        icon: Target,
        title: 'Bản chất',
        text: 'Thị trường tự do tạo ra áp lực buộc doanh nghiệp tối ưu chi phí, năng suất và tốc độ đổi mới.',
      },
      {
        icon: GitMerge,
        title: 'Hệ quả',
        text: 'Doanh nghiệp yếu dần bị loại khỏi cuộc chơi, mạnh lên nhờ tích tụ và mở rộng quy mô.',
      },
      {
        icon: Sparkles,
        title: 'Mâu thuẫn',
        text: 'Cạnh tranh càng khốc liệt thì xu hướng tập trung tư bản càng rõ và càng nhanh.',
      },
    ],
    footer: {
      back: null,
      next: '1.2',
      nextLabel: 'Tiếp tục mục 1.2',
    },
  },
  {
    id: '1.2',
    label: '1.2. Tích lũy - tích tụ - tập trung',
    eyebrow: 'Mục 1.2',
    title: 'Ba mắt xích của quá trình phát triển',
    intro:
      'Từ cạnh tranh tự do, quá trình bành trướng quy mô sản xuất diễn ra qua tích lũy, tích tụ và tập trung tư bản.',
    layout: 'cards',
    cards: [
      {
        icon: Layers3,
        title: 'Tích lũy tư bản',
        text: 'Lợi nhuận được tái đầu tư để mở rộng sản xuất, tăng sức cạnh tranh và tạo nền tảng cho bước phát triển tiếp theo.',
      },
      {
        icon: Factory,
        title: 'Tích tụ tư bản',
        text: 'Quy mô vốn của từng doanh nghiệp tăng dần, khiến khoảng cách giữa các chủ thể trong thị trường ngày càng lớn.',
      },
      {
        icon: Landmark,
        title: 'Tập trung tư bản',
        text: 'Những doanh nghiệp mạnh mua lại, hợp nhất hoặc nuốt chửng doanh nghiệp yếu, tạo cụm quyền lực kinh tế mới.',
      },
    ],
    footer: {
      back: '1.1',
      backLabel: 'Quay lại 1.1',
      next: '1.3',
      nextLabel: 'Tiếp tục mục 1.3',
    },
  },
  {
    id: '1.3',
    label: '1.3. Tập trung sản xuất',
    eyebrow: 'Mục 1.3',
    title: 'Từ sản xuất tập trung đến độc quyền',
    intro:
      'Khi tập trung sản xuất đạt trình độ cao, nó tất yếu đẻ ra các tổ chức độc quyền. Đây là bước chuyển hóa lượng sang chất.',
    layout: 'split',
    cards: [
      {
        icon: Factory,
        title: 'Bước 01: Quy mô lớn dần',
        text: 'Sản xuất mở rộng liên tục, doanh nghiệp có động lực gom vốn, gom công nghệ và gom thị phần.',
      },
      {
        icon: ShieldCheck,
        title: 'Bước 02: Rào cản gia nhập',
        text: 'Doanh nghiệp mới khó chen vào vì hạ tầng, kênh phân phối và quan hệ thị trường bị chi phối bởi ông lớn.',
      },
      {
        icon: CircleDot,
        title: 'Bước 03: Độc quyền hình thành',
        text: 'Một số ít tổ chức nắm quyền kiểm soát thị trường, tạo nên quyền lực định giá và điều phối toàn ngành.',
      },
    ],
    footer: {
      back: '1.2',
      backLabel: 'Quay lại 1.2',
      next: '1.4',
      nextLabel: 'Tiếp tục mục 1.4',
    },
  },
  {
    id: '1.4',
    label: '1.4. Vì sao tất yếu hóa độc quyền?',
    eyebrow: 'Mục 1.4',
    title: 'Vì sao cạnh tranh tự do tất yếu dẫn đến độc quyền?',
    intro:
      'Cạnh tranh tự do không phải sân chơi hòa bình. Nó là cuộc chiến liên tục đào thải mắt xích yếu nhất để hình thành độc quyền.',
    layout: 'quote',
    quote:
      'Tất yếu là xu hướng khách quan của chủ nghĩa tư bản: cạnh tranh tự do làm tư bản ngày càng tích tụ và tập trung, từ đó tạo tiền đề hình thành độc quyền.',
    panels: [
      {
        title: 'Mặt động',
        text: 'Quy mô doanh nghiệp tăng mạnh, công nghệ và vốn được hợp nhất, tạo sức mạnh vượt trội.',
      },
      {
        title: 'Mặt lịch sử',
        text: 'Không phải mọi ngành đều độc quyền ngay tức thì, nhưng xu thế tập trung là dài hạn và khó đảo ngược.',
      },
    ],
    footer: {
      back: '1.3',
      backLabel: 'Quay lại 1.3',
      next: 'case-study',
      nextLabel: 'Chuyển sang Phần II',
    },
  },
]

export const caseStudySections = [
  {
    id: '2.1',
    label: '2.1. Bối cảnh',
    eyebrow: 'Mục 2.1',
    title: 'Bối cảnh hình thành Standard Oil',
    intro:
      'Đế chế dầu mỏ của John D. Rockefeller là minh chứng rõ nhất cho quá trình thâu tóm từ cạnh tranh tự do sang độc quyền cực đoan.',
    layout: 'timeline',
    timeline: [
      {
        year: '1870',
        title: 'Standard Oil được thành lập',
        text: 'Rockefeller bắt đầu gom vốn, xây lợi thế quy mô và tiến hành tối ưu hóa từng khâu của chuỗi cung ứng dầu.',
      },
      {
        year: '1879',
        title: 'Mở rộng kiểm soát',
        text: 'Doanh nghiệp từng bước kiểm soát vận chuyển, lọc dầu và phân phối, khóa chặt năng lực cạnh tranh của đối thủ.',
      },
      {
        year: '1882',
        title: 'Standard Oil Trust',
        text: 'Mô hình trust biến Standard Oil thành cỗ máy quản trị tập trung, đủ sức chi phối hệ sinh thái ngành dầu.',
      },
    ],
    footer: {
      back: 'theory',
      backLabel: 'Quay lại Phần I',
      next: '2.2',
      nextLabel: 'Tiếp tục mục 2.2',
    },
  },
  {
    id: '2.2',
    label: '2.2. Sáp nhập & thâu tóm',
    eyebrow: 'Mục 2.2',
    title: 'Quá trình Rockefeller sáp nhập đối thủ',
    intro:
      'Standard Oil kiểm soát gần như toàn bộ lọc dầu, đường ống, tàu chở dầu và hệ thống kho bãi nhờ chiến lược mua lại, ép giá và đồng hóa đối thủ.',
    layout: 'metrics',
    metrics: [
      {
        value: '90%+',
        title: 'Thị phần lọc dầu',
        text: 'Kiểm soát phần lớn hoạt động lọc dầu tại Mỹ trong giai đoạn đỉnh cao.',
      },
      {
        value: '40+',
        title: 'Công ty liên kết',
        text: 'Tập hợp nhiều công ty trong một cấu trúc quản trị tập trung.',
      },
      {
        value: '100%',
        title: 'Chuỗi hạ tầng',
        text: 'Nắm kênh vận chuyển và kho bãi để bóp nghẹt đối thủ từ gốc.',
      },
    ],
    panels: [
      {
        title: 'Lách luật',
        text: 'Mô hình trust giúp vượt rào cản sở hữu chéo và gom quyền điều hành vào một trung tâm.',
      },
      {
        title: 'Bóp nghẹt',
        text: 'Đối thủ bị ép giá, mất tuyến vận chuyển và dần phải quy phục hoặc rời thị trường.',
      },
    ],
    footer: {
      back: '2.1',
      backLabel: 'Quay lại 2.1',
      next: '2.3',
      nextLabel: 'Tiếp tục mục 2.3',
    },
  },
  {
    id: '2.3',
    label: '2.3. Thành công',
    eyebrow: 'Mục 2.3',
    title: 'Vì sao quá trình thâu tóm thành công?',
    intro:
      'Rockefeller thắng không chỉ nhờ vốn, mà còn nhờ quản trị, logistics và khả năng tái đầu tư lợi nhuận để mở rộng cỗ máy độc quyền.',
    layout: 'cards',
    cards: [
      {
        icon: Factory,
        title: 'Hiệu quả sản xuất',
        text: 'Quy mô lớn giúp giảm chi phí, tăng lợi thế giá và giữ lợi nhuận cho vòng mua lại tiếp theo.',
      },
      {
        icon: Telescope,
        title: 'Tầm nhìn chiến lược',
        text: 'Đầu tư vào hạ tầng then chốt trước khi đối thủ kịp hình thành mạng lưới thay thế.',
      },
      {
        icon: Target,
        title: 'Chiến thuật thâu tóm',
        text: 'Mua, ép, hợp nhất, rồi tiêu hóa từng mảnh đối thủ thay vì cạnh tranh trực diện thuần túy.',
      },
    ],
    footer: {
      back: '2.2',
      backLabel: 'Quay lại 2.2',
      next: '2.4',
      nextLabel: 'Tiếp tục mục 2.4',
    },
  },
  {
    id: '2.4',
    label: '2.4. Kết quả',
    eyebrow: 'Mục 2.4',
    title: 'Từ doanh nghiệp lớn đến tổ chức độc quyền',
    intro:
      'Standard Oil biến thị trường dầu mỏ tự do thành sân chơi độc quyền cực đoan, nhưng chính nó cũng tạo ra phản ứng từ xã hội và pháp luật.',
    layout: 'result',
    quote:
      'Standard Oil có quyền lực độc quyền rất lớn, nhưng độc quyền không thủ tiêu hoàn toàn cạnh tranh.',
    stats: [
      { label: 'Thị phần', value: '90-95%' },
      { label: 'Hạ tầng', value: 'Khép kín' },
      { label: 'Giá bán', value: 'Bị điều tiết' },
    ],
    footer: {
      back: '2.3',
      backLabel: 'Quay lại 2.3',
      next: 'analysis',
      nextLabel: 'Chuyển sang Phần III',
    },
  },
]

export const analysisSections = [
  {
    id: '3.1',
    label: '3.1. Khái niệm',
    eyebrow: 'Mục 3.1',
    title: 'Cạnh tranh không biến mất, chỉ đổi hình thức',
    intro:
      'Độc quyền sinh ra từ cạnh tranh tự do nhưng không thể xóa bỏ cạnh tranh. Nó chỉ đẩy xung đột lên quy mô lớn hơn.',
    layout: 'quote',
    quote:
      'Cạnh tranh tự do sinh ra độc quyền. Nhưng độc quyền không thể giết chết cạnh tranh.',
    panels: [
      {
        title: 'Giữa các tập đoàn',
        text: 'Các "ông lớn" tranh nhau thị trường, công nghệ, vốn và ảnh hưởng chính sách.',
      },
      {
        title: 'Ngoài độc quyền',
        text: 'Công ty nhỏ và người mới vẫn tìm cách chen vào bằng công nghệ hoặc mô hình phân phối mới.',
      },
    ],
    footer: {
      back: 'case-study',
      backLabel: 'Quay lại Phần II',
      next: '3.2',
      nextLabel: 'Tiếp tục mục 3.2',
    },
  },
  {
    id: '3.2',
    label: '3.2. 4 dạng cạnh tranh',
    eyebrow: 'Mục 3.2',
    title: 'Bốn dạng cạnh tranh trong thời độc quyền',
    intro:
      'Sự thống trị của liên minh độc quyền không triệt tiêu ganh đua mà chia nó thành nhiều lớp: công khai, ngầm và xuyên tổ chức.',
    layout: 'cards',
    cards: [
      {
        icon: CircleDot,
        title: 'Giữa các tập đoàn độc quyền',
        text: 'Đấu nhau trên quy mô lớn nhất về thị phần, công nghệ và khả năng dẫn dắt ngành.',
      },
      {
        icon: ShieldCheck,
        title: 'Độc quyền vs. ngoài độc quyền',
        text: 'Doanh nghiệp mới phải tìm khe hở thị trường, làm khác biệt sản phẩm hoặc tái cấu trúc kênh bán.',
      },
      {
        icon: Compass,
        title: 'Cạnh tranh ngầm',
        text: 'Tranh nhau nguyên liệu, đường vận chuyển, dữ liệu và chuỗi cung ứng cốt lõi.',
      },
      {
        icon: Landmark,
        title: 'Cạnh tranh chính sách',
        text: 'Ảnh hưởng luật chơi, quy chuẩn và can thiệp thể chế trở thành mặt trận mới.',
      },
    ],
    footer: {
      back: '3.1',
      backLabel: 'Quay lại 3.1',
      next: '3.3',
      nextLabel: 'Tiếp tục mục 3.3',
    },
  },
  {
    id: '3.3',
    label: '3.3. Phản ứng pháp lý',
    eyebrow: 'Mục 3.3',
    title: 'Độc quyền mạnh đến đâu cũng không đứng ngoài luật chơi',
    intro:
      'Một tổ chức độc quyền lớn vẫn phải đối diện phản ứng của luật pháp, xã hội và các lực lượng cạnh tranh mới.',
    layout: 'timeline',
    timeline: [
      {
        year: '1911',
        title: 'Phán quyết chia tách',
        text: 'Tòa án tối cao buộc một tập đoàn độc quyền tách thành nhiều đơn vị độc lập hơn.',
      },
      {
        year: 'Hệ quả',
        title: 'Thị trường tái cấu trúc',
        text: 'Độc quyền lớn không biến mất ngay, nhưng cấu trúc cạnh tranh đã thay đổi về chất.',
      },
      {
        year: 'Bài học',
        title: 'Luật chơi luôn vận động',
        text: 'Bất cứ quyền lực kinh tế nào cũng phải đối diện với phản ứng của thị trường và thể chế.',
      },
    ],
    footer: {
      back: '3.2',
      backLabel: 'Quay lại 3.2',
      next: 'mini-game',
      nextLabel: 'Tiếp tục Mini game',
    },
  },
]

export const closingHighlights = [
  {
    icon: Sparkles,
    title: 'Kết luận đề tài',
    text: 'Từ cạnh tranh tự do đến độc quyền là một tiến trình lịch sử có quy luật, không phải ngoại lệ.',
  },
  {
    icon: Scale,
    title: 'Thông điệp',
    text: 'Độc quyền không phủ định cạnh tranh. Nó tái định hình, nâng cấp và làm gay gắt hóa cạnh tranh.',
  },
  {
    icon: ArrowRight,
    title: 'Ứng dụng',
    text: 'Bài học giúp nhìn sâu hơn vào cấu trúc thị trường, quyền lực doanh nghiệp và vai trò điều tiết.',
  },
]
