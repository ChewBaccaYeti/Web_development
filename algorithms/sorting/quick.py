"""
=====================================================================
Quick Sort / Быстрая сортировка
---------------------------------------------------------------------
Идея (divide & conquer):
  1. Выбираем pivot
  2. Partition: < pivot влево, >= вправо
  3. Рекурсивно сортируем части
Time:  O(n log n) avg, O(n²) worst
Space: O(log n) avg (стек рекурсии)
Stable: no
In-place: yes
=====================================================================
"""


def quick_sort(arr: list[int], lo: int = 0, hi: int = None) -> list[int]:
    if hi is None:
        hi = len(arr) - 1

    if lo < hi:
        p = partition(arr, lo, hi)
        quick_sort(arr, lo, p - 1)
        quick_sort(arr, p + 1, hi)

    return arr


def partition(arr: list[int], lo: int, hi: int) -> int:
    """Lomuto partition: arr[hi] — pivot."""
    pivot = arr[hi]
    i = lo - 1

    for j in range(lo, hi):
        if arr[j] <= pivot:
            i += 1
            arr[i], arr[j] = arr[j], arr[i]

    arr[i + 1], arr[hi] = arr[hi], arr[i + 1]
    return i + 1


if __name__ == "__main__":
    print(quick_sort([10, 7, 8, 9, 1, 5]))  # [1, 5, 7, 8, 9, 10]
