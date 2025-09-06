module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // 커밋 메시지 제목 최대 길이
    'subject-max-length': [2, 'always', 72],
    // 커밋 메시지 제목 최소 길이
    'subject-min-length': [2, 'always', 3],
    // 허용되는 타입들
    'type-enum': [
      2,
      'always',
      [
        'feat', // 새로운 기능
        'fix', // 버그 수정
        'docs', // 문서 변경
        'style', // 코드 포맷팅, 세미콜론 누락, 코드 변경 없음
        'refactor', // 코드 리팩토링
        'perf', // 성능 개선
        'test', // 테스트 추가/수정
        'build', // 빌드 시스템, 외부 의존성 변경
        'ci', // CI 설정 파일 및 스크립트 변경
        'chore', // 기타 변경사항 (유지보수)
        'revert', // 이전 커밋 되돌리기
      ],
    ],
  },
};
