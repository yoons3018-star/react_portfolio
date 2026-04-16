React + TypeScript Career Introduction Page
React와 TypeScript를 기반으로 제작한 간단한 경력 소개 웹페이지입니다.채용 지원 시 저의 개발 경력과 프로젝트 경험을 한눈에 전달할 수 있도록 구성했습니다.

프로젝트 소개

이 프로젝트는 React + TypeScript 기반의 프론트엔드 개발 역량을 보여주기 위해 제작했습니다.복잡한 기능보다는 컴포넌트 분리, 타입 정의, 유지보수 가능한 구조에 중점을 두었습니다.


기술 스택
• React
• TypeScript
• Vite
• HTML / CSS

주요 구성

- Header.tsx

  상단 소개 영역 및 기본 정보 표시

- Content.tsx
  경력 및 프로젝트 소개 콘텐츠 영역

Footer.tsx

  하단 정보 및 마무리 영역

types
  
  컴포넌트에서 사용하는 TypeScript 타입 정의

assets

  이미지, 아이콘 등 정적 리소스 관리










폴더 구조

src/
 ├── assets/       # 이미지, 아이콘 등 정적 리소스
 ├── types/        # TypeScript 타입 정의
 ├── App.tsx       # 전체 레이아웃 구성
 ├── Content.tsx   # 본문 콘텐츠 컴포넌트
 ├── Footer.tsx    # 하단 영역 컴포넌트
 ├── Header.tsx    # 상단 영역 컴포넌트
 └── main.tsx      # 애플리케이션 진입점
index.html



구현 포인트
• 화면을 Header / Content / Footer 단위로 분리하여 구조를 단순화했습니다.
• TypeScript 타입을 별도로 관리하여 코드 가독성과 유지보수성을 높이려 했습니다.
• 경력 소개 목적에 맞게 불필요한 기능은 줄이고, 정보 전달에 집중한 UI로 구성했습니다.


실행 방법
npm install
npm run dev


프로젝트 목적
이 프로젝트는 대규모 기능 구현보다,React + TypeScript 기반에서 컴포넌트를 분리하고 타입을 정의하는 기본기를 보여주는 데 목적이 있습니다.
실무에서도 작은 화면 단위부터 명확하게 역할을 나누고,유지보수가 쉬운 구조로 작성하려는 습관을 반영했습니다.
